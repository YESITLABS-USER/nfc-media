import React, { useEffect, useState } from "react";
import Start from "../assets/icons/startPattern.png";
import "../styles/login.css";
import CustomInput from "../components/custom/CustomInput";

import Modal from "react-bootstrap/Modal";
import { Formik, Form } from "formik";
import * as Yup from "yup"; 

import GoogleReview from "../assets/icons/googleReview.svg";
import SocialMediaAbout from "../components/SocialMediaAbout";
import Coopons from "../components/Coopons";
import Verification from "../components/VerificationModal";
import AddShortCut from "../components/AddShortCut";
import Header from "../components/Header";
import CustomButton from "../components/custom/CustomButton";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user) 
  const navigate = useNavigate()

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIos, setIsIos] = useState(false);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isModalOpen,setIsModalOpen ] = useState(false);
  const [isModalOpen11,setIsModalOpen11 ] = useState(false);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState(false);
  const [addToShort, setToShortCut] = useState(false);

  // Use Formik for form handling

  useEffect(() => {
    // Detect if the user is on iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIos(/iphone|ipad|ipod/.test(userAgent));

    // Listen for the 'beforeinstallprompt' event (for Android)
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the mini-infobar from appearing
      setDeferredPrompt(event);
      setShowInstallButton(true); // Show the "Add to Home Screen" button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup the event listener
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (isIos) {
      alert('To install this app, tap the "Share" button in Safari and select "Add to Home Screen".');
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt.");
        } else {
          console.log("User dismissed the install prompt.");
        }
        setDeferredPrompt(null); // Clear the prompt after use
      });
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name should be at least 3 characters long'),
    phone_number: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  });

  const handleSubmit = async (values) => {
    setSelectedPhoneNumber(values?.phone_number)
    if (!values.special_offer || !values.terms_agree) {
      setIsModalOpen11(true);
      return;
    }
    try {
      const result = await dispatch(signUp(values));

      if (result.meta?.requestStatus === 'fulfilled') {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  
  
  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Header chgName={false} />
      </div>
      <div className="login-container">
        <img src={Start} alt="Start Pattern" className="start-img" />
        <div className="text-container">
          <span style={{ color: "#000000", fontSize: "16px", fontWeight: "600" }}> TAGIS </span>
          <span style={{ color: "#2D008C", fontWeight: "bold" }}> Tap Connect Experience </span>
        </div>
      </div>

      <div className="text-container">
        <span style={{ color: "#000000", fontSize: "20px", fontWeight: "bold", alignSelf: "center", marginTop: 20 }}>
          Welcome to Tagis!
        </span>
        <span style={{ fontSize: "16px", textAlign: "center", alignSelf: "center" }}>
          Review easily, enjoy benefits – It all <br /> happens with just 
          <span style={{ color: "#2C0089", fontWeight: "bold" }}>one tap!</span>
        </span>
      </div>

      {/* formik form */}
      <Formik initialValues={{ name: '', phone_number: '', is_adult: false, terms_agree: false, 
        special_offer: false, }} validationSchema={validationSchema} onSubmit={handleSubmit} >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <div style={{ marginTop: 20 }}>
            <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
              <CustomInput
                value={values.name}
                onChange={(e) => setFieldValue('name', e.target.value)}
                name="name"
                label={"Name"}
              />
              {errors.name && touched.name && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px", fontWeight: "500", marginLeft: "10px" }}>
                  {errors.name}
                </p>
              )}
            </div>

            <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
              <CustomInput
                value={values.phone_number}
                onChange={(e) => setFieldValue('phone_number', e.target.value)}
                name="phone_number"
                label={"Phone Number"}
                num={true}
              />
              {errors.phone_number && touched.phone_number && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px", fontWeight: "500", marginLeft: "10px" }}>
                  {errors.phone_number}
                </p>
              )}
            </div>
          </div>

          <div style={{ margin: "30px", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <label style={{ display: "flex", fontSize: "16px", color: "black", fontWeight: "500" }}>
              <input
                type="checkbox"
                name="is_adult"
                onChange={(e) => setFieldValue('is_adult', e.target.checked)}
                checked={values.is_adult}
                style={{ marginRight: "10px", accentColor: "#2A0181", transform: "scale(1.2)" }}
              />
              <span>I am 13 or older.</span>
            </label>
            {errors.is_adult && touched.is_adult && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "5px", fontWeight: "500", marginLeft: "10px" }}>
                {errors.is_adult}
              </p>
            )}

            <label style={{ display: "flex", alignItems: "start", fontSize: "16px", gap: "10px", color: "black", fontWeight: "500" }}>
              <input
                type="checkbox"
                name="terms_agree"
                onChange={(e) => setFieldValue('terms_agree', e.target.checked)}
                checked={values.terms_agree}
                style={{ accentColor: "#2A0181", transform: "scale(1.2)", marginTop: 7 }}
              />
              <span>
                I agree to the
                <a onClick={() => navigate("/terms-condition")} style={{ color: "#2A0181", cursor:"pointer", marginLeft: "5px" }} rel="noopener noreferrer">
                  Terms and Conditions
                </a> and
                <a onClick={() => navigate("/privacy-policy")} style={{ color: "#2A0181", cursor:"pointer", marginLeft: "5px" }} rel="noopener noreferrer">
                  Privacy policy
                </a>
              </span>
            </label>
            
            <label style={{ display: "flex", alignItems: "start", fontSize: "16px", gap: "10px", color: "black", fontWeight: "500" }}>
              <input
                type="checkbox"
                name="special_offer"
                onChange={(e) => setFieldValue('special_offer', e.target.checked)}
                checked={values.special_offer}
                style={{ accentColor: "#2A0181", transform: "scale(1.2)", marginTop: 7 }}
              />
              <span>
                I agree to receive special offers, coupons, and marketing updates based on my preferences.
              </span>
            </label>

          </div>

          <CustomButton text={loading ? "Loading..." : "Sign Up"} type="submit" fullWidth={"40%"} />
        </Form>
      )}
    </Formik>
      {/* Modal and other components remain the same */}
      <Modal show={isModalOpen11} onHide={() => setIsModalOpen11(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Please agree to all terms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to agree to all terms by checking all the boxes.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen11(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen11(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ backgroundColor: "#E0E0E0", width: "100vw", height: "3px", padding: "0", boxSizing: "border-box", marginTop: "20px" }} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }} >
        <img src={GoogleReview} alt="Star Pattern" className="start-img" style={{ width: "auto", height: "auto" }} />
      </div>

      <CustomButton text="Leave a review" onClick={() => { setToShortCut(true); console.log("hello test user"); }} fullWidth={"50%"} />
      <Coopons setCallback={() => {}} value={false} />

      <div style={{ backgroundColor: "#E0E0E0", width: "100vw", height: "3px", padding: "0", boxSizing: "border-box", marginTop: "20px" }} />
      <SocialMediaAbout signup={true} />
      <Verification isModalOpen={isModalOpen} phone={selectedPhoneNumber} setIsModalOpen={setIsModalOpen} />
      <AddShortCut isModalOpen={addToShort} setIsModalOpen={setToShortCut} handleInstallClick={handleInstallClick} showInstallButton={showInstallButton} />
    </>
  );
};

export default SignupPage;
