const express = require("express");
const cors = require("cors");
const { data } = require("./wilaya");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Get is not supported" });
});

app.post("/", async (req, res) => {
  try {
    const communes = data[req.body.wilaya];
    res.status(200).json({
      communes: communes,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`connected sucessfully on port ${port}`);
});
