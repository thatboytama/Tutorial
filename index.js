const express = require("express"); //importing express

const app = express(); //instance of an express app

// import express from 'express'
app.listen("5000", () => console.log("Listening at PORT 5000"));
app.get("/", (req, res) => {
  res.send("You don reach your destination my gee");
});
