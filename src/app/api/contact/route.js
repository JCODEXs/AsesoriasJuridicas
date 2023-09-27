import { NextResponse } from 'next/server';
import fs from 'fs';
export async function POST(req, res) {
    const  data  = await req.json();
    const jsonData = JSON.stringify(data)
    
    if (!fs.existsSync('contact')) {
      fs.mkdirSync('contact');
    }
    console.log(jsonData)
    try {
    fs.writeFileSync(`contact/${data.name}.json`, jsonData)
        return NextResponse.json({ data: jsonData }, { status: 200 });
  }catch{
    return NextResponse.json({ message:"error ocurred" }, { status: 400 });
  }
}