const app = require("./app");
const {sequelize} = require("./config/db");
const port = process.env.PORT || 800;

sequelize.sync().then(() => {
  console.log("DB Connected");

  app.listen(port, () => {
    console.log(`Server running on http://192.168.29.160:${port}`);
  });
});