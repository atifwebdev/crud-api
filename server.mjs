import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world! by Atif1");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});