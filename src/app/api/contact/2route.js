import { NextResponse } from 'next/server';
import fs from 'fs';
import insertDocument from "../../../../lib/mongoDb"
export async function POST(req, res) {
    const  data  = await req.json();
    const jsonData = JSON.stringify(data)
    
    if (!fs.existsSync('contact')) {
      fs.mkdirSync('contact');
    }
    console.log(jsonData)
    try {
    // fs.writeFileSync(`contact/${data.name}.json`, jsonData)
   const response = await insertDocument("Juridicas",jsonData)
   console.log(response)
        return NextResponse.json({ data: jsonData }, { status: 200 });
  }catch{
    return NextResponse.json({ message:"error ocurred" }, { status: 400 });
  }
}

