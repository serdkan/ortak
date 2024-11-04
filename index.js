const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "serdar", "index.html"));
});

app.get("/burak", function (req, res) {
  res.sendFile(path.join(__dirname, "burak", "index.html"));
});

app.get("/efe", function (req, res) {
  res.sendFile(path.join(__dirname, "efe", "index.html"));
});

app.get("/mazhar", function (req, res) {
  res.sendFile(path.join(__dirname, "mazhar", "index.html"));
});

app.get("/ba", function (req, res) {
  res.sendFile(path.join(__dirname, "ba", "index.html"));
});
app.get("/fatih", function (req, res) {
  res.sendFile(path.join(__dirname, "fatih", "index.html"));
});

app.get("/mustafa", function (req, res) {
  res.sendFile(path.join(__dirname, "mustafa", "index.html"));
});

app.get("/ahmet", function (req, res) {
  res.sendFile(path.join(__dirname, "ahmet", "index.html"));
});

app.get("/ahmetaldemir", function (req, res) {
  res.sendFile(path.join(__dirname, "ahmetaldemir", "index.html"));
});

app.listen(80);
