const validateContactAndEmail = (req, res, next) => {
  const { contact_no, email } = req.body;

  // Contact number format validation
  if (contact_no) {
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(contact_no)) {
      return res.status(200).json({
        success: false,
        message: "Enter valid contact number",
      });
    }
  }else{
    return res.status(200).json({
        success: false,
        message: "enter contact number",
      });
  }

  // Email format validation
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(200).json({
        success: false,
        message: "Invalid email ID format",
      });
    }
  }

  // If everything is valid, proceed to the controller
  next();
};

module.exports = {
  validateContactAndEmail,
};
