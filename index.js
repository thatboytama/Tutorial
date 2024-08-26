const express = require("express"); //importing express
const path = require("path");

const app = express(); //instance of an express app
const PORT = 5000;
app.use(express.json());
app.use(express.static("public"));

app.get("/indexlogin.js", (req, res) => {
  res.sendFile(path.join(__dirname, "indexlogin.js"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "indexlogin.html"));
});
app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/userinfo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "userinfo.html")); //directory name is used to get the current directory you are recently in __dir
});
app.get("/schoolinfo.html", (req, res) => {
  res.sendFile(path.join(__dirname, "schoolinfo.html"));
});

const users = [
  {
    username: "tama",
    password: "funds",
  },
  {
    username: "victor",
    password: "calabarman",
  },
  {
    username: "flourish",
    password: "fredrick",
  },
  {
    username: "chizy",
    password: "lenovo",
  },
];
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please fill up all fields" });
  }

  const user = users.find(
    (e) => e.username === username && e.password === password
  );

  console.log(user);

  res.status(200).json({ message: "Success" });
});

app.use("*", (req, res) => {
  res.send("Inavlid route😁");
});
app.listen("5000", () => console.log("Listening at PORT 5000"));
