import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import starIcon from "../assets/icons/startPattern.png";
import loyality_background from "../assets/images/loyality_bg.png";
import "../styles/loyality.css"; // Assuming external CSS file
import { Button } from "react-bootstrap";
import BottomSheet from "../components/BottomSheet";
import Reward from "../components/Reward";
import { useNavigate } from "react-router-dom";

import Line22 from "../assets/icons/line222.png";

const userData = {
  name: "Martin James",
  points: 500,
  reedem_coupan: 1,
  total_coupan: 9,
  last_updated: "2022-03-15",
};

const Loyality = () => {
  const flipped = Array(9).fill(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [coupanPopup, setCoupanPopup] = useState(false);
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();
  const handleFlip = () => {
    setIsSliderOpen(!isSliderOpen);
  };
  // const handleFlip = (index) => {
  //   if (index !== 8) {
  //     setIsSliderOpen(!isSliderOpen);
  //   }
  // };

  return (
    <div className="loyality-container">
      <OnboardHeader disabled={true} />
      <div
        className="loyality-section"
        style={{ backgroundImage: `url(${loyality_background})` }}
      >
        <div className="loyality-content">
          <p
            style={{
              fontSize: 22,
              color: "black",
              fontWeight: "700",
            }}
          >
            Thanks for your Loyalty
          </p>
          <div className="loyality-grid">
            {[
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              <span key="free">
                FREE
                <br />
                ICE
                <br />
                CREAM
              </span>,
            ].map((item, index) => {
              const isRedeemed = index < user.reedem_coupan; // Check if the item is redeemed
              const isClickable = index === user.reedem_coupan; // Only the next item is clickable

              return (
                <div
                  key={index}
                  className={`loyality-item ${
                    flipped[index] ? "flipped" : ""
                  } ${isRedeemed ? "redeemed" : ""}`}
                  onClick={() => isClickable && handleFlip(index)} // Allow click only if clickable
                >
                  <div className="loyality-item-inner">
                    <div className="loyality-item-front">
                      {isRedeemed ? (
                        <img src={starIcon} alt="Redeemed" />
                      ) : (
                        item
                      )}
                    </div>
                    <div className="loyality-item-back">
                      <img src={starIcon} alt="Pattern" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reward-info">
            <h5>After 9 Sessions You Can Get</h5>
            <p>Free Ice Cream</p>
          </div>
          <Button style={{ backgroundColor: "#4F4F4F", border: "#4F4F4F" }}>
            ACTIVATE
          </Button>

          <BottomSheet isOpen={isSliderOpen}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img src={Line22} alt="line22" style={{ marginTop: 20 }} />
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#000000",
                  paddingTop: "20px",
                }}
              >
                Coupon Confirmation
              </h2>

              <div
                style={{
                  backgroundColor: "#E0E0E0",
                  width: "100%",
                  height: "3px",
                  padding: "0",
                  boxSizing: "border-box",
                  marginBottom: "20px",
                  borderTop: "2px solid #E1E1E1",
                }}
              />
              <p style={{ textAlign: "center", marginBottom: "30px" }}>
                I confirm that I want to activate the coupon.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#FFFFFF",
                    color: "Black",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onClick={() => {
                    setIsSliderOpen(false);
                  }}
                >
                  RETURN
                </button>
                <button
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#2A0181",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s ease",
                    marginLeft: 20,
                  }}
                  onClick={() => {
                    const updatedUserData = {
                      ...user,
                      reedem_coupan: user.reedem_coupan + 1,
                    };
                    setUser(updatedUserData);
                    setIsSliderOpen(false);
                    setCoupanPopup(true);
                  }}
                >
                  ACTIVATE
                </button>
              </div>
              <p
                style={{
                  margin: 10,
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Note: The coupon is valid for 15 minutes after activation.
              </p>
            </div>
          </BottomSheet>
          {coupanPopup && (
            <Reward
              showPopup={coupanPopup}
              onClose={() => {
                setCoupanPopup(false);
                navigate("/dashboard");
              }}
              countText={
                user?.reedem_coupan === 9
                  ? "You Got FREE ICECREAM"
                  : `${user?.reedem_coupan} / ${userData?.total_coupan}`
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Loyality;
