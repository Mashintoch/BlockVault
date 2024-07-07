import React, { useState } from "react";
import "./waitlist.css";
import Layout from "@/components/Layout";
import { BsArrowRight } from "react-icons/bs";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("Join");
  const [resultMessage, setResultMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
        toast.success("Subscription successful!");
        setResultMessage("You have successfully joined the waitlist.");
        setButtonText("Success!");
      } else {
        toast.error("Subscription failed. Please try again later.");
        setResultMessage(data.message);
        setButtonText("Try again");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("An unexpected error occurred.");
      setResultMessage(error.message);
      setButtonText("Try again");
    } finally {
      setIsButtonDisabled(false);
    }
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
          <PrimaryButton
            type="submit"
            className="!px-5 aspect-square !rounded-md"
            disabled={isButtonDisabled}
          >
            {buttonText} <BsArrowRight color="white" />
          </PrimaryButton>
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
    </Layout>
  );
};

export default Waitlist;
