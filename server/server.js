import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/account", (req, res) => {
  res.json({ Message: "this is for creating accounts" });
});

app.get("/account", (req, res) => {
  res.json({ Message: "this is for login into an account" });
});

app.delete("/account", (req, res) => {
  res.json({ Message: "this is for deleting an account" });
});

app.patch("/account", (req, res) => {
  res.json({ Message: "this is for updating accounts info" });
});

app.post("/resource", (req, res) => {
  res.json({ Message: "this is for uploading resources" });
});

app.get("/resource", (req, res) => {
  res.json({ Message: "this is for getting all resources" });
});

app.get("/resource:id", (req, res) => {
  res.json({ Message: "this is for getting a particular resource" });
});

app.delete("/resource:id", (req, res) => {
  res.json({ Message: "this is for deleting a particular resource" });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
