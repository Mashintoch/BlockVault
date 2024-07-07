import React, { useState } from "react";
import "./waitlist.css";
import Layout from "@/components/Layout";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Join");
  const [resultMessage, setResultMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        throw new Error("Please enter your email");
      }

      setButtonText("Sending...");
      setIsButtonDisabled(true);

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

      const data = await response.json();
      if (response.ok) {
        setModalContent("Subscription successful!");
        setShowModal(true);
        setResultMessage("You have successfully joined the waitlist.");
        setButtonText("Success!");
      } else {
        setModalContent("Subscription failed. Please try again later.");
        setShowModal(true);
        setResultMessage(data.message);
        setButtonText("Try again");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setModalContent("An unexpected error occurred.");
      setShowModal(true);
      setResultMessage(error.message);
      setButtonText("Try again");
    } finally {
      setIsButtonDisabled(false);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const closeModal = () => {
    setShowModal(false);
    reloadPage();
  };

  return (
    <Layout>
      <div className="container-section">
        <h1>Be the first to know when we launch</h1>
        <p>
          At BlockVault, We are looking to solve the problems of trading
          automation, stock ML model integration, explained trading insights and
          future and past events aggregations.
        </p>
        <form className="join-wrapper" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="border border-primary hover:bg-primary hover:text-white transition-colors duration-300  from-primary to-secondary rounded-sm py-3 px-6 md:py-4 md:px-7"
            disabled={isButtonDisabled}
          >
            {buttonText}
          </button>
        </form>
        <p className="result">{resultMessage}</p>
        <div className="creators">
          <div>
            <img src="https://i.pravatar.cc/150?img=11" alt="creator" />
            <img src="https://i.pravatar.cc/150?img=5" alt="creator" />
            <img src="https://i.pravatar.cc/150?img=7" alt="creator" />
          </div>
          <p>
            Join over 5k+ other traders and get early access to beta BlockVault.
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500 bg-opacity-75">
          <div className="relative bg-white rounded-lg p-8 max-w-lg mx-auto z-50">
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
            <p className="text-lg text-neutral-900 font-bold">{modalContent}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Waitlist;
