// const acVariation = require("../models/acVariation");
// const Jobs = require("../models/jobs");
const AppError = require("../utils/AppError");
const DateUtil = require("../utils/DateUtil");
const hasValue = require("../utils/hasValue");
const Pagination = require("../utils/Pagination");
const tryCatch = require("../utils/tryCatch");

const db = require("../models");
const { where } = require("sequelize");

const Jobs = db.jobs;
const acVariation = db.ac_variations;

const listJobs = tryCatch(async function (req, res, next) {
  const pagination = Pagination.build(req.body);

  const jobs = await Jobs.findAndCountAll({
    include: [
      {
        model: acVariation,
        as: "ac_variations",
        required: false,
      },
    ],
    order: [["id", "DESC"]],
    ...(pagination.isPaginated && {
      limit: pagination.limit,
      offset: pagination.offset,
    }),
    attributes: {
      exclude: ["deleted_at"],
    },
  });

  return res.status(200).json({
    success: true,
    message: "Job List Found",
    total_records: jobs.count,
    data: jobs.rows,
  });
});

const addJob = tryCatch(async function (req, res, next) {
  const {
    name,
    contact_no,
    address,
    city,
    state,
    pincode,
    ac_type,
    job_type,
    contract_period,
    service_type,
    date,
    price,
    remarks,
    id,
    ac_variation,
  } = req.body;

  if (hasValue(id)) {
    const job = await Jobs.findByPk(id);
    if (!job) {
      throw new AppError("Job not found", 404);
    }
    await job.update({
      name: name || "",
      contact_no: contact_no || "",
      address: address || "",
      city: city || "",
      state: state || "",
      pincode: pincode || "",
      ac_type: ac_type || "",
      job_type: job_type || job.job_type,
      contract_period: contract_period || job.contract_period,
      service_type: service_type || "",
      date: date || job.date,
      price: price || "",
      remarks: remarks || "",
    });

    let variation = ac_variation;

    if (typeof variation === "string") {
      try {
        variation = JSON.parse(variation);
      } catch {
        variation = [];
      }
    }

    if (!Array.isArray(variation)) {
      variation = [];
    }

    if (variation.length > 0) {
      await acVariation.destroy({ where: { job_id: id } });

      const formatted = variation.map((item) => ({
        job_id: id,
        capacity: item.capacity || "",
        location: item.location || "",
        complains: item.complains || "",
      }));

      await acVariation.bulkCreate(formatted);
    }

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
    });
  }

  // Add new job
  const creatJob = await Jobs.create({
    name: name || "",
    contact_no: contact_no || "",
    address: address || "",
    city: city || "",
    state: state || "",
    pincode: pincode || "",
    ac_type: ac_type || "",
    job_type: job_type || "",
    contract_period: contract_period || "",
    service_type: service_type || "",
    date: date || "",
    price: price || "",
    remarks: remarks || "",
  });

  let variationData = ac_variation;

  if (typeof variationData === "string") {
    try {
      variationData = JSON.parse(variationData);
    } catch (err) {
      variationData = [];
    }
  }
  if (!Array.isArray(variationData)) {
    variationData = [];
  }
  if (variationData.length > 0) {
    const formattedData = variationData.map((item) => ({
      job_id: creatJob.id,
      capacity: item.capacity || "",
      location: item.location || "",
      complains: item.complains || "",
    }));

    await acVariation.bulkCreate(formattedData);
  }

  return res.status(200).json({
    success: true,
    message: "Job added successfully",
  });
});

const deletejob = tryCatch(async function (req, res, next) {
  const { id } = req.body;

  const job = await Jobs.findByPk(id);

  if (!job) {
    throw new AppError("Invalid Job Id", 404);
  }

   await acVariation.destroy({
    where: { job_id: id }
  });
  
  await job.destroy();


  return res.status(200).json({
    success: true,
    message: "Job deleted successfully",
  });
});

module.exports = { addJob, listJobs, deletejob };
