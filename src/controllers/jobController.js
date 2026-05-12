const Jobs = require("../models/jobs");
const AppError = require("../utils/AppError");
const DateUtil = require("../utils/DateUtil");
const hasValue = require("../utils/hasValue");
const Pagination = require("../utils/Pagination");
const tryCatch = require("../utils/tryCatch");

const listJobs = tryCatch(async function (req, res, next) {;

  const pagination = Pagination.build(req.body);

  const jobs = await Jobs.findAndCountAll({ 
    order: [["id", "DESC"]],
    ...(pagination.isPaginated &&{
        limit:pagination.limit,
        offset:pagination.offset
    })

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
    id
  } = req.body;

  if(hasValue(id)){
    const job = await Jobs.findByPk(id);
    if(!job){
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

    return res.status(200).json({
        success: true,
        message: "Job updated successfully",
    });
  }

  // Add new job
  await Jobs.create({
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

  return res.status(200).json({
    success: true,
    message: "Job added successfully",
  });
});


module.exports = { addJob, listJobs };
