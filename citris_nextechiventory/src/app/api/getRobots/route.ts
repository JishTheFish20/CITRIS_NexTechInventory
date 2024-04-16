import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`SELECT * from Robots;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}



export async function getRobots(){
    const result = await sql`SELECT * from Robots;`;
    // console.log(result);
    return result;
}