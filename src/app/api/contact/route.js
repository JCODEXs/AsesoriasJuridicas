import { connectToDatabase} from "../../../../lib/mongoDb";
import { NextResponse } from 'next/server';
export async function POST(req, res) {
    const  data  = await req.json();
    const jsonData = JSON.stringify(data)
    
    const  cached  = await connectToDatabase();
  const db=cached.conn.db
//   console.log(db)
  try{
  const result = await db.collection('Contactos').insertOne(data);
//   console.log(result);
  return NextResponse.json({ data: jsonData }, { status: 200 });
} catch(err) {
    console.log(err)
return NextResponse.json({ message:"error ocurred" }, { status: 400 });
}}