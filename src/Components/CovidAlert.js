import React from "react";
import "../Css/CovidAlert.css";
import RoomIcon from "@material-ui/icons/Room";

function CovidAlert() {
  return (
    <div className="CovidAlert">
      <div className="deliverOption">
        <RoomIcon className="RoomIcon" />
        <div className="DelivertoPakistan">
          <span className="Deliverto">Deliver to</span>
          <span className="Pakistan">Pakistan</span>
        </div>
      </div>
      <div className="Delivery-Option-List">
        <span className="Options">Today's Deal</span>
        <span className="Options">Customer Service</span>
        <span className="Options">Gift Cards</span>
        <span className="Options">Registry</span>
        <span className="Options">Sell</span>
      </div>
      <div className="responseToCovid">
        <p> Amazon's Response to COVID-19</p>
      </div>
    </div>
  );
}
export default CovidAlert;
