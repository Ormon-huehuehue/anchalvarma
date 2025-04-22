import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SupabaseNav from "@/components/SupabaseNav";

interface submissionProps{
  id : number,
  full_name : string,
  email_address : string,
  phone_number : number,
  service_interested_in : string,
  preferred_date : string, 
  message : string
}

const page = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (!user) {
    return redirect("/sign-in");
  }

  const { data, error } = await supabase.from("contact_form_submissions").select("*");

  if (error) {
    return <div className="p-8 text-red-500">Error fetching data: {error.message}</div>;
  }

return (
    <div className="px-8 h-[80dvh]">
      <SupabaseNav/>
      <h1 className="text-2xl font-semibold my-4">Form Submissions Dashboard</h1>
      {data?.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Full Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Service</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((submission: submissionProps) => (
                <tr key={submission.id}>
                  <td className="border px-4 py-2">{submission.full_name}</td>
                  <td className="border px-4 py-2">{submission.email_address}</td>
                  <td className="border px-4 py-2">{submission.phone_number}</td>
                  <td className="border px-4 py-2">{submission.service_interested_in}</td>
                  <td className="border px-4 py-2">{submission.preferred_date}</td>
                  <td className="border px-4 py-2">{submission.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default page;
