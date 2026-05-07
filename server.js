const app = require("./app");
const { sequelize } = require("./src/config/db");
const port = process.env.PORT || 800;
const { getLocalIPAddress } = require("./src/utils/get-local-ip.js");

sequelize.sync().then(() => {
  console.log("DB Connected");

  app.listen(port, () => {
    console.log(`Server running on http://${getLocalIPAddress()}:${port}`);
  });
});
