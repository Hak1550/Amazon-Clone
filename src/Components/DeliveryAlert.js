import React from "react";
import "../Css/DeliveryAlert.css";
function DeliveryAlert() {
  return (
    <div className="DeliveryAlert">
      <p>
        We are delivering to your region with limited shipping options. Please
        expect extended delivery time.
        <span className="LearnMore">Learn more.</span>
      </p>
    </div>
  );
}

export default DeliveryAlert;
