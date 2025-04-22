import React from "react";
import { createClient } from "@/utils/supabase/server";

const page = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("contact_form_submissions").select("*");
  console.log("data : ",data)

  if (error) {
    return <div className="p-8 text-red-500">Error fetching data: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Form Submissions Dashboard</h1>
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
                <th className="border px-4 py-2">Consent</th>
              </tr>
            </thead>
            <tbody>
              {data.map((submission: any) => (
                <tr key={submission.id}>
                  <td className="border px-4 py-2">{submission.full_name}</td>
                  <td className="border px-4 py-2">{submission.email_address}</td>
                  <td className="border px-4 py-2">{submission.phone_number}</td>
                  <td className="border px-4 py-2">{submission.service_interested_in}</td>
                  <td className="border px-4 py-2">{submission.preferred_date}</td>
                  <td className="border px-4 py-2">{submission.message}</td>
                  <td className="border px-4 py-2">{submission.consent ? "Yes" : "No"}</td>
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
