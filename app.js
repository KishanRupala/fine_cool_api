const express = require("express");
const core = require("cors");
const authRoute = require("./routes/authRoutes");
const AppError = require('./utils/AppError');
const { errorHandler } = require("./middlewares/errorHandler");
const app = express();

app.use(core()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoute);
app.use("/api/manageUser", require("./routes/user.routes"));
app.use("/api/manageRoles", require("./routes/role.routes"));

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// app.use(errorHandler);

module.exports = app;
