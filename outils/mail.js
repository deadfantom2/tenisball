const nodemailer = require('nodemailer');
require('dotenv').config();

// Contact as client send to me
exports.sendMail = async (email, name, message, res) => {
  try {
    const sender = await nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PWD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_LOGIN,
      to: process.env.EMAIL_LOGIN,
      subject: `About one coin from ${email}`,
      html: `<div>
       <h1>Hello, Russian Coins</h1>
       <h3>My email: ${email}</h3>
       <h3>My name: ${name}</h3>
       <h3>My message: ${message}</h3>
       <h1>Thank you, ${name}</h1>
       </div>`, // html body
    };
    await sender.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: 'The administrator will respond as soon as possible!' });
  } catch (error) {
    return res.status(500).json({ message: 'Sorry, we work on this problem!' });
  }
};

// I send to client some message
exports.sendClientMail = async (email, subject, name, message, res) => {
  try {
    const sender = await nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PWD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_LOGIN,
      to: email,
      subject: `${subject}`,
      html: `<div>
       <h1>Hello, ${name}</h1>
       <h1>${message}</h1>
       <h1>Thank you for your understandings, Administrator.</h1>
       </div>`, // html body
    };
    await sender.sendMail(mailOptions);
  } catch (error) {
    return res.status(500).json({ message: 'Sorry, we work on this problem!' });
  }
};
