const express = require("express");
const path = require("path");
const app = express();
const sql = require("mssql");
const { exec } = require("child_process");

app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "serdar", "index.html"));
});

app.get("/update/:username", function (req, res) {
  console.log("update oldu");
  const username = req.params.username;
  console.log(username);
  if (!username) return;
  exec(`git pull origin ${username}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Hata: ${error.message}`);
      return res.status(500).send(`Hata: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    res.send(`Git pull işlemi başarılı: ${stdout}`);
  });
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
console.log("dinleniyor");
