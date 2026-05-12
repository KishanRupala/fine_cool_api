require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./src/config/db");
const PORT = process.env.PORT || 3000;
const { getLocalIPAddress } = require("./src/utils/get-local-ip.js");

// require("./src/models/jobs");
// require("./src/models/acVariation");

sequelize.sync({ alter: true }).then(() => {
  console.log("DB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on http://${getLocalIPAddress()}:${PORT}`);
  });
});
