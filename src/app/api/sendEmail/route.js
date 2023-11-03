// import nodemailer from 'nodemailer';

// export default async (req, res) => {
//   const { body } = req;

//   const transporter = nodemailer.createTransport({
//     host: 'mail.mettalecode.sites',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'juasees@mettalecode.site', 
//       pass: 'elegido22'
//     }
//   });

//   const mailOptions = {
//     from: 'PensionesColombianos',
//     to: "juansebastianescobar.vega@gmail.com",
//     subject: "New client",
//     text: body.message
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       res.status(500).send({ success: false });
//     } else {
//       res.status(200).send({ success: true });
//     }
//   });
// };
