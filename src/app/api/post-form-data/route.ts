"use server"

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {

  const supabase = await createClient();

  try {
    const body = await request.json();
    const {
      full_name,
      email_address,
      phone_number,
      service_interested_in,
      preferred_date,
      message,
      consent
    } = body;

    // Basic validation
    if (!full_name || !email_address || !service_interested_in || !message || typeof consent !== 'boolean') {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("contact_form_submissions").insert([{
      full_name,
      email_address,
      phone_number,
      service_interested_in,
      preferred_date,
      message,
      consent,
    }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Error inserting data" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Post route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
