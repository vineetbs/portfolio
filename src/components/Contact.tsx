"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/app/page";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        e.target,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY! }
      )
      .then((result) => {
        setformData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message Sent");
      })
      .catch((error) => {
        toast.error("Something went wrong with sending");
        console.log(error);
      })
      .finally(() => setloading(false));
  };

  return (
    <section>
      <Toaster richColors />
      <div className="grid  gap-4 px-4  md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div>
            <div className="text-center">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl py-2">
                Contact Me
              </h2>
            </div>
            <div className="m-2 grid mx-2">
              <form action="" className="mx-2" onSubmit={handleSubmit}>
                <div className="text-xl">Name</div>
                <input
                  type="text"
                  placeholder="Enter your name here..."
                  className="block my-2 w-full p-2 rounded-xl  border-gray-500 border focus:bg-gray-100  dark:focus:bg-gray-900 focus:outline-none  "
                  value={formData.name}
                  onChange={(e) =>
                    setformData({ ...formData, name: e.target.value })
                  }
                  required
                  name="from_name"
                />
                <div className="text-xl">Email</div>
                <input
                  type="text"
                  placeholder="name@example.com"
                  className="block my-2 w-full p-2 rounded-xl  border-gray-500 border focus:bg-gray-100  dark:focus:bg-gray-900 focus:outline-none  "
                  value={formData.email}
                  onChange={(e) =>
                    setformData({ ...formData, email: e.target.value })
                  }
                  required
                  name="from_email"
                />
                <div className="text-xl">Message</div>
                <textarea
                  placeholder="Enter your message here..."
                  className="block my-2 w-full p-2 rounded-xl  border-gray-500 border focus:bg-gray-100  dark:focus:bg-gray-900 focus:outline-none h-[80px] "
                  value={formData.message}
                  onChange={(e) =>
                    setformData({ ...formData, message: e.target.value })
                  }
                  required
                  name="message"
                />
                <div className="text-center py-2">
                  <Button
                    variant={"secondary"}
                    className="w-[100px] hover:bg-gray-400 dark:hover:bg-gray-600 bg-gray-300 dark:bg-gray-900"
                  >
                    {loading ? "Submitting..." : `Submit`}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Contact;
