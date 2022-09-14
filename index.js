const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.post("/add", (req, res) => {
  const a = +req.body.num1;
  const b = +req.body.num2;
  let add = a + b;
  if (isNaN(a) || isNaN(b)) {
    res.send(`status:"error"
    meassge:"Invalid data types"`);
  } else if (a > 1000000 || b > 1000000 || add > 1000000) {
    res.send(`status:"error"
    message:"overflow"`);
  } else if (a < -1000000 || b < -1000000 || add < -1000000) {
    res.send(`
    status:"error"
    message:"underflow"`);
  } else {
    res.send(`status:"success" 
    message:"the sum of given two numbers"
    sum:${add}`);
  }
});
app.post("/sub", (req, res) => {
  const a = +req.body.num1;
  const b = +req.body.num2;
  let sub = a - b;
  if (isNaN(a) || isNaN(b)) {
    res.send(`status:"error" 
    message:"Invalid data types"`);
  } else if (a > 1000000 || b > 1000000 || sub > 1000000) {
    res.send(`status:"error"
    message:"overflow"`);
  } else if (a < -1000000 || b < -1000000 || sub < -1000000) {
    res.send(`status:"error"
    message:"underflow"`);
  } else {
    res.send(`
    status:"success" 
    message:the difference of given two numbers"
    sub:${sub}`);
  }
});
app.post("/multiply", (req, res) => {
  const a = +req.body.num1;
  const b = +req.body.num2;

  let multiply = a * b;
  if (isNaN(a) || isNaN(b)) {
    res.send(`status:"error"
    message:"Invalid data types"`);
  } else if (a > 1000000 || b > 1000000 || multiply > 1000000) {
    res.send(`status:"error"
    message:"overflow"`);
  } else if (a < -1000000 || b < -1000000 || multiply < -1000000) {
    res.send(`status:"error"
    message:"underflow"`);
  } else {
    res.send(`status:"success" 
    message:"the multiplication of given two numbers"
    multiplication:${multiply}`);
  }
});
app.post("/divide", (req, res) => {
  const a = +req.body.num1;
  const b = +req.body.num2;
  let divide = a / b;
  if (b == 0) {
    res.send(`status:"error" 
    message:"Cannot divide by zero"`);
  } else if (isNaN(a) || isNaN(b)) {
    res.send(`status:"error" 
    message:"Invalid data types"`);
  } else if (a > 1000000 || b > 1000000 || divide > 1000000) {
    res.send(`status:"error"  
    message:"overflow"`);
  } else if (a < -1000000 || b < -1000000 || divide < -1000000) {
    res.send(`
    status:"error" 
    message:"underflow"`);
  } else {
    res.send(`status:"success" 
    message:"the division of given two numbers"
    divison:${divide}`);
  }
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
