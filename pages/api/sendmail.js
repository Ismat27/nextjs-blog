import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    },
    secure: true,
})

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const mailMsg = `A message was sent to you from ${name} via your portfolio website from this mail address ${email}
  The content is as below:
  ${message}
  `
  const mailOptions = {
    from: email,
    to: "adegbiteismail27@gmail.com",
    subject: `New message from ${name} ${email}`,
    text: mailMsg,
  };
  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({message: 'email delivered successfully'})
  } catch (error) {
    return res.status(200).json({message: 'unable to deliver mail'})
  }
}
