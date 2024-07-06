import React, { useState } from "react";
import "./waitlist.css";
import Layout from "@/components/Layout";

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

      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch("/waitlist", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.content) {
        setButtonText("Success!");
        setResultMessage("You have successfully joined the waitlist.");
      } else {
        setButtonText("Try again");
        setIsButtonDisabled(false);
        setResultMessage(data.message);
      }
    } catch (error) {
      setButtonText("Try again");
      setIsButtonDisabled(false);
      setResultMessage(error.message);
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="container-section">
        <h1>Be the first to know when we launch</h1>
        <p>
          At BlockVault, We are looking to solve the problems of trading automation,
          stock ML model integration, explained trading insights and future and past events aggregations.
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
    </Layout>
  );
};

export default Waitlist;
