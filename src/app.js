const express = require("express");
const core = require("cors");
const app = express();


app.use(core());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/auth.routes"));
app.use("/api/manageUser", require("./routes/user.routes"));
app.use("/api/manageRoles", require("./routes/role.routes"));


module.exports = app;