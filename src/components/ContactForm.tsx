/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState} from 'react'
import axios from "axios"
import { Button } from "@/components/ui/button";

const ContactForm = () => {

    const [form, setForm] = useState({
        full_name: "",
        email_address: "",
        phone_number: "",
        service_interested_in: "",
        preferred_date: "",
        message: "",
        consent: false,
      });
    
      const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        //@ts-expect-error : checked doesn't exist on given type
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
    
        try {
          await axios.post("/api/post-form-data", form, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          setStatus("success");
          setForm({
            full_name: "",
            email_address: "",
            phone_number: "",
            service_interested_in: "",
            preferred_date: "",
            message: "",
            consent: false,
          });
        } catch (error) {
          console.error(error);
          setStatus("error");
        }
      };

  return (
    <div className="p-8 md:col-span-3">
    <h3 className="text-xl font-semibold">Send a Message</h3>
    <p className="mt-2 text-muted-foreground">
      Fill out the form below and I'll get back to you as soon as possible.
    </p>

    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder = "Your Name"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email_address"
            value={form.email_address}
            onChange={handleChange}
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium leading-none">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium leading-none">
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <select
            name="service_interested_in"
            value={form.service_interested_in}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
            >
            <option value="">Select a service</option>
            <option value="bridal">Bridal Makeup</option>
            <option value="event">Special Event Makeup</option>
            <option value="lesson">Makeup Lesson</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="text-sm font-medium leading-none">
          Preferred Date
        </label>
        <input
            type="date"
            name="preferred_date"
            value={form.preferred_date}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tell me about your event or any questions you have"
        ></textarea>
      </div>

      <div className="flex items-center space-x-2">
        <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            required    
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I consent to having my information stored for contact purposes
        </label>
      </div>

      <Button type="submit" disabled={status === "loading"} className='font-light !font-montserrat text-white'>
        {status === "loading" ? "SUBMITTING..." : "SUBMIT"}
      </Button>
      {status === "success" && <p className="mt-2 text-muted-foreground">Form submitted successfully!</p>}
      {status === "error" && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}
    </form>
  </div>
  )
}

export default ContactForm