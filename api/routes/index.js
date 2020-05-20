var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', (req, res, next) => {
  res.json(['test']);
});
router.post('/send', (req, res, next) => {
  var firstname = req.body.firstname
  var surname = req.body.surname
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${firstname} ${surname} \n email: ${email} \n message: ${message} `

  var mail = {
    from: firstname+" "+surname,
    to: 'kontakt@myslizaczytanej.pl',  //Change to email address that you want to receive messages on
    subject: 'Nowa wiadomość od ',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: err
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})


module.exports = router;
