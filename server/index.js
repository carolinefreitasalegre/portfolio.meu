const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "carolfreitas_92@hotmail.com",
    pass: "262457jp",
  },
});

app.post("/enviado", (req, res) => {
  const { nome, email, msgm } = req.body;

  const mailOptions = {
    from: "carolfreitas_92@hotmail.coml",
    to: email,
    subject: nome,
    text: msgm,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.err;
    } else {
      res.json({ success: "Email enviado com sucesso!" });
    }
  });
});

app.listen((port) => {
  console.log("Servidor on!");
});
