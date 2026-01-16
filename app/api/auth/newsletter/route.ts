import { NextResponse } from "next/server";
import { dbconnect } from "@/lib/db";
import { Newsletter } from "@/model/newsletter";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await dbconnect();

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 409 }
      );
    }

    await Newsletter.create({ email });

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
