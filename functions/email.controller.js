require("dotenv").config();
const nodeMail = require("nodemailer");

const sendMail = async ({
  email,
  text,
  subject,
  name
}) => {

  const transporter = await nodeMail.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `"${name}" ${email}`,
    to: process.env.EMAIL,
    text,
    subject
  };

  try {
    await transporter.sendMail(mailOption);
    console.log('message was sent');
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

module.exports = sendMail