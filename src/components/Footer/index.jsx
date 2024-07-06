import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "/Icons/logo.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setModalContent("Subscription successful!");
      } else {
        setModalContent("Subscription failed. Please try again later.");
      }
      setShowModal(true);
    } catch (error) {
      console.error("Error subscribing:", error);
      setModalContent("An unexpected error occurred.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
                  Buy Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Watchlist
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 xl:flex md:justify-center xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Products
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
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Security
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
                  System Status
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="text-gray hover:text-primary">
                  Area Avaibility
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
              Never miss the lastest news & events on crypto
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
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative bg-white rounded-lg p-8 max-w-md mx-auto z-50">
              <button
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="text-lg text-gray-800">{modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
