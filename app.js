const express = require("express");
const core = require("cors");
const authRoute = require("./src/routes/authRoutes");
const roleRoute = require("./src/routes/roleRoutes");
const userRoute = require("./src/routes/userRoutes");
const checkTokenRoutes = require("./src/routes/checkTokenRoutes");
const AppError = require('./src/utils/AppError');
const { errorHandler } = require("./src/middlewares/errorHandler");
const app = express();

app.use(core()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoute);
app.use("/api", checkTokenRoutes);
app.use("/api/manageUser", userRoute);
app.use("/api/manageRoles", roleRoute);

app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;
