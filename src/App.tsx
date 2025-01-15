import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import './index.css';

import dotenv from "dotenv";
dotenv.config();

const App = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/webhook/razorpay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Populate this payload based on Razorpay webhook data
        }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setPaymentStatus("Payment Captured Successfully");
        toast.success("Payment Captured Successfully!");
      } else {
        setPaymentStatus("Payment Failed or Event Not Handled");
        toast.error("Payment Failed or Event Not Handled!");
      }
    } catch (error) {
      setPaymentStatus("Error occurred");
      toast.error("Something went wrong!");
      console.log(error)
    }
  };

  useEffect(() => {
    // Call checkPaymentStatus whenever needed
    checkPaymentStatus();
  }, []);

  return (
    <div className="container">
      <div className="warning-card">
        <div className="warning-header">
          ⚠️ TEST ENVIRONMENT - DO NOT PAY ⚠️
        </div>

        <div className="warning-content">
          <div className="alert-box">
            <p>PLEASE DON'T PAY ANYTHING HERE</p>
            <p>THIS IS JUST A TEST WEBSITE</p>
            <p>RAZOR PAY IS IN TEST MODE</p>
          </div>

          <div className="qr-container">
            <img
              src="/Dont_Pay_RazorPay_QR_Code.jpeg"
              alt="Test QR Code"
              className="qr-code"
            />
          </div>
        </div>
      </div>

      <div className="payment-status">
        {/* Display the payment status */}
        {paymentStatus && <p>{paymentStatus}</p>}
      </div>

      <Toaster />
    </div>
  );
};

export default App;
