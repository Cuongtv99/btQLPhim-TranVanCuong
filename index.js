const express = require("express");
const app = express();

const { rootRouter } = require("./routers/root.router");

app.use(express.json());

const port = 7000;

app.listen(port, () => {
  console.log(`app run on port ${port}`);
});

app.use("/api", rootRouter);
