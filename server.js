const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/calculate", (req, res) => {
  const { number1, number2, operation } = req.body;
  const prev = +number1;
  const current = +number2;
  if (isNaN(prev) || isNaN(current)) {
    res.send("");
    return;
  }
  let result = "";
  if (operation === "add") result = prev + current;
  if (operation === "subtract") result = prev - current;
  if (operation === "multiply") result = prev * current;
  if (operation === "divide") result = prev / current;
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
