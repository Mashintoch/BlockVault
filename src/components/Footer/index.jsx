import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "/Icons/logo.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://block-vault-server.vercel.app/api/subscribers/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        toast.success("Subscription successful!");
      } else {
        toast.error("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <footer>
      <div className="container px-2 border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-6 xl:flex md:justify-between xl:border-r border-lightgray">
            <div className="mb-6">
              <img src={logo} alt="BlockVault" className="w-24" />
            </div>
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Trade Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Wallets
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  AI/ML
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Trading Bots
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 xl:flex md:justify-center xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Whitepaper
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Investors
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 xl:flex md:justify-center xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Area Availability
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full lg:col-span-3 xl:col-auto">
            <span className="text-gray">Newsletter</span>
            <p className="text-gray font-thin">
              Never miss the latest news & events on crypto
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 my-4">
                <div>
                  <input
                    type="email"
                    className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <PrimaryButton
                    type="submit"
                    className="!px-5 aspect-square !rounded-md"
                  >
                    <BsArrowRight color="white" />
                  </PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray text-xs">
          © Copyright {new Date().getFullYear()} . All rights reserved
        </p>
        <small className="text-gray text-xs">
          Design by Paul Chibueze, Contact{" "}
          <a
            href="mailto:chibuezedeveloper@gmail.com"
            className="text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </small>
      </div>
      {/* React Toastify Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </footer>
  );
}
