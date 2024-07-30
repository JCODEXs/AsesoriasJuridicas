import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../lib/mongoDb";
import { NextResponse } from "next/server";
// import { Resend } from 'resend';
// import  {EmailTemplate} from "../../../../components/contact/emailTemplate"
let cached;
// import nodemailer from 'nodemailer';
// function generateHTML(contact) {
//   return (
//     `<li class="card">
//       ${contact.name ? `<div><strong>Nombre:</strong> ${contact.name}<br /></div>` : ''}
//       ${contact.email ? `<div><strong>Email:</strong> ${contact.email}<br /></div>` : ''}
//       ${contact.message ? `<div><strong>Mensaje:</strong> ${contact.message}<br /></div>` : ''}
//       ${contact.contactDetails ? `<div><strong>Email:</strong> ${contact.contactDetails}<br /></div>` : ''}
//       ${contact.phone ? `<div><strong>Telefono:</strong> ${contact.phone}<br /></div>` : ''}
//       <br />
//     </li>`
//   );
// }
const { user, pass } = process.env;

export async function POST(req, res) {
  // const resend = new Resend(process.env.MY_SECRET_KEY);
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.privateemail.com',
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: user,
  //     pass: pass
  //   }
  // });

  try {
    const data = await req.json();
    const jsonData = JSON.stringify(data);
    const html = generateHTML(data);
    const cached = await connectToDatabase();
    const db = cached.conn.db;
    const mailOptions = {
      from: " PensionesColombianos <juasees@mettalecode.site>",
      to: [
        "juansebastianescobar.vega@gmail.com",
        "asesoriastabares@hotmail.com",
      ],
      subject: "Nuevo Cliente",
      html: html,
    };
    const result = await db.collection("Contactos").insertOne(data);
    // const email = await resend.emails.send({
    //   from: 'PensionesColombianos <onboarding@resend.dev>',
    //   to: "juansebastianescobar.vega@gmail.com",
    //   subject: 'Nuevo Cliente',
    //   react: EmailTemplate({contact:data}),
    // });
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error)
    //     return NextResponse.json({ message: "error occurred" }, { status: 400 });
    //   } else {
    //     console.log("hi")
    //     return NextResponse.json({ data: jsonData }, { status: 200 });
    //   }
    // });

    console.log(email);
    return NextResponse.json({ data: jsonData }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error occurred" }, { status: 400 });
  }
}

export async function GET(req, res) {
  try {
    const cached = await connectToDatabase();
    const db = cached.conn.db;
    const result = await db.collection("Contactos").find().toArray();
    const result2 = await db.collection("Email").find().toArray();
    const combinedResults = [...result, ...result2];
    console.log(result);
    return NextResponse.json({ combinedResults }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error occurred" }, { status: 400 });
  }
}

export async function DELETE(req, res) {
  try {
    const data = await req.json();
    const jsonData = JSON.stringify(data);

    const cached = await connectToDatabase();
    const db = cached.conn.db;

    if (data.name) {
      const result = await db
        .collection("Contactos")
        .deleteOne({ _id: new ObjectId(data._id) });
      if (result.deletedCount === 1) {
        return NextResponse.json(
          { message: "Successfully deleted the record from Contactos" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "No record found for deletion in Contactos" },
          { status: 404 }
        );
      }
    } else {
      const result = await db
        .collection("Email")
        .deleteOne({ _id: new ObjectId(data._id) });
      if (result.deletedCount === 1) {
        return NextResponse.json(
          { message: "Successfully deleted the record from Email" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { message: "No record found for deletion in Email" },
          { status: 404 }
        );
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error occurred" }, { status: 400 });
  } finally {
    if (cached && cached.conn) {
      await cached.conn.close();
    }
  }
}
