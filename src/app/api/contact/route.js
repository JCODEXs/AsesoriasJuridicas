import { ObjectId } from "mongodb";
import { connectToDatabase} from "../../../../lib/mongoDb";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import  {EmailTemplate} from "../../../../components/contact/emailTemplate"
let cached;
const resend = new Resend(process.env.MY_SECRET_KEY);



export async function POST(req, res) {
  try {
    const data = await req.json();
    const jsonData = JSON.stringify(data);
    
    const cached = await connectToDatabase();
    const db = cached.conn.db;
  
    const result = await db.collection('Contactos').insertOne(data);
    const email = await resend.emails.send({
      from: 'PensionesColombianos <onboarding@resend.dev>',
      to: ['asesoriastabares@hotmail.com',"juansebastianescobar.vega@gmail.com"],
      subject: 'Nuevo Cliente',
      react: EmailTemplate({contact:data}),
    });
    console.log(email)
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
    const result = await db.collection('Contactos').find().toArray();
    const result2 = await db.collection('Email').find().toArray();
    const combinedResults = [...result, ...result2];
    console.log(result)
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
      const result = await db.collection('Contactos').deleteOne({ _id: new ObjectId(data._id) });
      if (result.deletedCount === 1) {
        return NextResponse.json({ message: "Successfully deleted the record from Contactos" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "No record found for deletion in Contactos" }, { status: 404 });
      }
    } else {
      const result = await db.collection('Email').deleteOne({ _id: new ObjectId(data._id) });
      if (result.deletedCount === 1) {
        return NextResponse.json({ message: "Successfully deleted the record from Email" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "No record found for deletion in Email" }, { status: 404 });
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
