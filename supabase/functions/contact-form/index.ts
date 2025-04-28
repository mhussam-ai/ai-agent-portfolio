
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[Contact Form] Processing new contact form submission");
    
    // Log request details for debugging
    const requestBody = await req.text();
    console.log("[Contact Form] Request body:", requestBody);
    
    let data: ContactFormData;
    try {
      data = JSON.parse(requestBody);
    } catch (parseError) {
      console.error("[Contact Form] Error parsing request body:", parseError);
      throw new Error("Invalid request format");
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      const missingFields = [];
      if (!data.name) missingFields.push("name");
      if (!data.email) missingFields.push("email");
      if (!data.message) missingFields.push("message");
      
      console.error("[Contact Form] Missing required fields:", missingFields);
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }

    console.log("[Contact Form] Sending notification email to admin");
    
    // Send email notification to you
    try {
      const adminEmailResult = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "mohammadhussam.ai@gmail.com",
        subject: `New Contact Form Message from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
        reply_to: data.email,
      });
      console.log("[Contact Form] Admin notification sent successfully:", adminEmailResult);
    } catch (emailError) {
      console.error("[Contact Form] Error sending admin notification:", emailError);
      throw new Error("Failed to send admin notification");
    }

    console.log("[Contact Form] Sending confirmation email to user");
    
    // Send confirmation email to the sender
    try {
      const userEmailResult = await resend.emails.send({
        from: "Mohammad Hussam <onboarding@resend.dev>",
        to: data.email,
        subject: "Thank you for contacting me!",
        html: `
          <h2>Thank you for reaching out, ${data.name}!</h2>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Mohammad Hussam</p>
        `,
      });
      console.log("[Contact Form] User confirmation sent successfully:", userEmailResult);
    } catch (emailError) {
      console.error("[Contact Form] Error sending user confirmation:", emailError);
      // Don't throw here, as admin notification was already sent
      console.warn("[Contact Form] Proceeding despite confirmation email failure");
    }

    console.log("[Contact Form] Submission processed successfully");
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[Contact Form] Fatal error processing submission:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process contact form submission" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
