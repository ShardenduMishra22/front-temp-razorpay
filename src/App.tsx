import './index.css';

const App = () => {
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
    </div>
  );
};

export default App;