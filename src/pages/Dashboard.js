import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import HomeImg from "../assets/icons/homeImg.png";
import { FaChevronDown } from "react-icons/fa";
import "../styles/header.css";
import GoogleReview from "../assets/icons/googleReview.svg";
import LoyaltyCard from "../assets/icons/loyaltyCard.png";

import OpeingHrs from "../assets/icons/openingHrs.svg";

import Line22 from "../assets/icons/line222.png";

import ThickLine from "../assets/icons/thickLine.png";
// import Coops1 from "../assets/icons/freecoopons.png";
// import Coops2 from "../assets/icons/freeCops2.png";
// import Coops3 from "../assets/icons/freecops3.png";

import Img1 from "../assets/icons/img1.svg";
import Img2 from "../assets/icons/img2.svg";
import Img3 from "../assets/icons/img3.svg";
import CustomButton from "../components/custom/CustomButton";

import CopsActivation from "../components/CopsActivation";
import BottomSheet from "../components/BottomSheet";
import { useNavigate } from "react-router-dom";
import Reward from "../components/Reward";
import CoupanComponent from "../components/CoupanComponent";
import { MdDelete } from "react-icons/md";
// import LoyaltyCard from "../components/LoyaltyCard";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [freeCops, setFreeCops] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [ageLimitaion, setAddlimitation] = useState(false);
  const [coupanPopup, setCoupanPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const coupans = [
    {
      coupan_type: "Beverages coupon",
      coupan_discount: "FREE",
      coupan_title: "FREE COFFEE",
      coupan_validity: "31 DECEMBER 2025",
      coupan_color: "orange",
    },

    {
      coupan_type: "Beverages coupon",
      coupan_discount: "FREE",
      coupan_title: "FREE MOJITO ",
      coupan_validity: "DECEMBER 2025",
      coupan_color: "blue",
      occupied: true,
    },

    {
      coupan_type: "Liquors coupon",
      coupan_discount: "25%",
      coupan_title: "25% OFF ON LIQUORS",
      coupan_validity: "25 DECEMBER 2025",
      coupan_color: "blue",
      coupan_age: true,
    },

    {
      coupan_type: "Beverages coupon",
      coupan_discount: "FREE",
      coupan_title: "FREE COFFEE",
      coupan_validity: "31 DECEMBER 2025",
      coupan_color: "red",
    },

    {
      coupan_type: "Beverages coupon",
      coupan_discount: "FREE",
      coupan_title: "FREE MOJITO",
      coupan_validity: "DECEMBER 2025",
      coupan_color: "black",
    },

    {
      coupan_type: "Liquors coupon",
      coupan_discount: "25%",
      coupan_title: "25% OFF ON LIQUORS",
      coupan_validity: "DECEMBER 2025",
      coupan_color: "blue",
      coupan_age: true,
    },

    {
      coupan_type: "Beverages coupon",
      coupan_discount: "FREE",
      coupan_title: "FREE COFFEE",
      coupan_validity: "31 DECEMBER 2025",
      coupan_color: "orange",
    },
  ];

  const shortText =
    "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";
  const fullText =
    "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";

  // Toggle function to show/hide opening hours
  const toggleOpenHours = () => {
    setIsOpen(!isOpen);
  };

  const handleBottmSheet = (val) => {
    setIsSliderOpen(val);
  };

  return (
    <>
      <OnboardHeader disabled={true} OLODISABLE={true} />
      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100%",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: -30,
        }}
      />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {isOpen && (
          <div
            style={{
              display: "flex",
              justifyContent: "center", // Center the entire content horizontally
              marginTop: "20px", // Optional spacing
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Monday:
                </span>
                <span>8:00 - 17:00</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Tuesday:
                </span>
                <span>8:00 - 17:00</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Wednesday:
                </span>
                <span>8:00 - 17:00</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Thursday:
                </span>
                <span>8:00 - 17:00</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Friday:
                </span>
                <span>8:00 - 17:00</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                  }}
                >
                  Saturday:
                </span>
                <span>Closed</span>
              </li>
              <li style={{ display: "flex" }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    width: "150px",
                    textAlign: "start",
                    marginBottom: 10,
                  }}
                >
                  Sunday:
                </span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        )}
        {isOpen && (
          <div
            style={{
              backgroundColor: "#E0E0E0",
              height: "3px",
              padding: "0",
              boxSizing: "border-box",
              width: "100%",
            }}
          />
        )}
        <img
          src={OpeingHrs}
          style={{ objectFit: "contain", width: 200 }}
          onClick={toggleOpenHours}
          alt="open btn"
        />
      </div>
      <div>
        <img
          src={HomeImg}
          alt="homeImg"
          style={{ objectFit: "contain", width: "100%" }}
        />
      </div>

      <div style={{ textAlign: "left", margin: "0 auto", width: "90%" }}>
        <span style={{ fontSize: 20, fontWeight: "bold" }}>About</span>

        <div>
          <p>
            {isExpanded ? fullText : `${shortText}...`}
            <span
              onClick={handleToggle}
              style={{
                color: "#25026E",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isExpanded ? "Read less..." : "Read more..."}
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>EXPLORE OUR COUPONS</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px", // Optional: Add padding to the container
            borderRadius: "10px", // Optional: Round corners of the container
            width: "80%", // Optional: Control the width of the image container
            alignItems: "center", // Center images horizontally
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <LoyaltyCard /> */}
            <img
              src={LoyaltyCard}
              alt="Coupon 1"
              onClick={() => navigate("/loyality")}
              style={{ objectFit: "contain", cursor: "pointer" }}
            />
            <MdDelete style={{ fontSize: "25px", color: "red" }} />
          </div>

          <div
            style={{
              maxHeight: "545px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              overflowX: "hidden",
            }}
            className={showAll ? "custom-scrollbar" : ""}
          >
            {coupans
              .slice(0, showAll ? coupans.length : 3)
              .map((coupan, index) => (
                <CoupanComponent
                  key={index}
                  coupan_type={coupan.coupan_type}
                  coupan_discount={coupan.coupan_discount}
                  coupan_title={coupan.coupan_title}
                  coupan_validity={coupan.coupan_validity}
                  coupan_age={coupan.coupan_age}
                  coupan_color={coupan.coupan_color}
                  occupied={coupan.occupied}
                  onClick={() => {
                    if (coupan.coupan_age) {
                      setFreeCops(true);
                      setAddlimitation(true);
                    } else {
                      setFreeCops(true);
                      setAddlimitation(false);
                    }
                  }}
                />
              ))}
          </div>

          {/* <img src={Coops1} alt="Coupon 2" style={{ objectFit: "contain" }}
            onClick={() => { setFreeCops(true); setAddlimitation(false); }} />
          <img src={Coops2} alt="Coupon 3" style={{ objectFit: "contain" }} />
          <img src={Coops3} alt="Coupon 4" style={{ objectFit: "contain" }} onClick={() => {
              setFreeCops(true); setAddlimitation(true); }} /> */}
        </div>
        <button
          onClick={() => setShowAll(!showAll)} // Implement your logic here
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#25026E",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {showAll ? "See Less" : "See More"}
          <FaChevronDown
            style={{
              marginLeft: "10px",
              rotate: `${showAll ? "180deg" : "0deg"}`,
            }}
          />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <img
          src={Img1}
          alt="Coupon 3"
          style={{ objectFit: "contain", margin: 10, marginBottom: 25 }}
        />
        <img
          src={Img2}
          alt="Coupon 2"
          style={{ objectFit: "contain", margin: 10 }}
        />
        <img
          src={Img3}
          alt="Coupon 4"
          style={{ objectFit: "contain", margin: 10 }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={GoogleReview}
          alt="Star Pattern"
          className="start-img"
          style={{ width: "auto", height: "auto" }} // Adjust width and height as needed
        />
      </div>

      <CustomButton
        text="Leave a Review"
        onClick={() => {}}
        fullWidth={"50%"}
        borderRadus={true}
      />
      <CopsActivation
        isModalOpen={freeCops}
        setIsModalOpen={setFreeCops}
        callBack={handleBottmSheet}
        ageLimitaion={ageLimitaion}
        setAddlimitation={setAddlimitation}
      />
      <BottomSheet isOpen={isSliderOpen} onClose={() => {}}>
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
              fontWeight: "600",
            }}
          >
            Coupon Confirmation
          </h2>

          <img src={ThickLine} alt="thick tline" style={{ marginBottom: 30 }} />
          <p
            style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "black",
              // fontWeight: "400",
            }}
          >
            I confirm that I want to activate the coupon.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <button
              style={{
                marginRight: 40,
                padding: "8px 12px",
                backgroundColor: "#FFFFFF",
                color: "Black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow here
                transition: "box-shadow 0.3s ease", // Smooth transition for hover effect
              }}
              onClick={() => {
                setIsSliderOpen(false);
                setFreeCops(false);
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
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow here
                transition: "box-shadow 0.3s ease",
                marginLeft: 20,
              }}
              onClick={() => {
                setIsSliderOpen(false);
                setFreeCops(false);
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
          onClose={() => setCoupanPopup(false)}
          countText={"Here is your FREE COFFEE Coupon from olo"}
        />
      )}
    </>
  );
};

export default Dashboard;
