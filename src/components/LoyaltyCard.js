// // import React, { useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules"; // Only Navigation module
// // import { FaTrash } from "react-icons/fa"; // Delete icon
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import BackgroundImg from "../assets/images/loyalityCard.png"; // Correct path to the image

// // const LoyaltyCard = () => {
// //   const [slides, setSlides] = useState([
// //     "Text 1",
// //     "Text 2",
// //     "Text 3",
// //     "Text 4",
// //     "Text 5",
// //     "Text 6",
// //     "Text 7",
// //     "Text 8",
// //     "Text 9",
// //   ]);

// //   const handleDelete = (index) => {
// //     if (window.confirm("Are you sure you want to delete this slide?")) {
// //       const updatedSlides = slides.filter((_, i) => i !== index);
// //       setSlides(updatedSlides);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: "180px",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <Swiper
// //         modules={[Navigation]} // Only Navigation module
// //         navigation={true} // Enable navigation
// //         loop={false}
// //         spaceBetween={0} // No space between slides
// //         slidesPerView={1} // Show 1 slide at a time
// //         pagination={false} // Disable pagination
// //         style={{ height: "100%" }}
// //       >
// //         {slides.map((text, index) => (
// //           <SwiperSlide key={index}>
// //             <div
// //               style={{
// //                 position: "relative",
// //                 width: "100%",
// //                 height: "100%", // Take full height
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 backgroundImage: `url(${BackgroundImg})`,
// //                 backgroundPosition: "center",
// //                 backgroundRepeat: "no-repeat",
// //                 textAlign: "center",
// //                 color: "white",
// //                 fontSize: "24px",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               <p style={{ color: "blue" }}>{text}</p>

// //               {/* Delete Icon */}

// //               <FaTrash
// //                 onClick={() => handleDelete(index)}
// //                 style={{
// //                   position: "absolute",
// //                   marginLeft: 400,
// //                 }}
// //                 size={40}
// //                 color="red"
// //               />
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default LoyaltyCard;
// ///

// ///
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FaTrash } from "react-icons/fa"; // Delete icon
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination"; // Import pagination styles
// import BackgroundImg from "../assets/images/loyalityCard.png"; // Correct path to the image

// const LoyaltyCard = () => {
//   const [slides, setSlides] = useState([
//     "Text 1",
//     "Text 2",
//     "Text 3",
//     "Text 4",
//     "Text 5",
//     "Text 6",
//     "Text 7",
//     "Text 8",
//     "Text 9",
//   ]);

//   const swiperRef = React.useRef(null); // Reference to the swiper instance

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this slide?")) {
//       const updatedSlides = slides.filter((_, i) => i !== index);
//       setSlides(updatedSlides);
//     }
//   };

//   const goToNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideNext(); // Trigger swiper to move to the next slide
//     }
//   };

//   const goToPrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slidePrev(); // Trigger swiper to move to the previous slide
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "250px", // Increased height to accommodate pagination and buttons
//         overflow: "hidden",
//         textAlign: "center",
//       }}
//     >
//       <Swiper
//         ref={swiperRef} // Assign the ref to the swiper
//         loop={false}
//         spaceBetween={0}
//         slidesPerView={1}
//         pagination={{ clickable: true }} // Enable clickable pagination
//         // style={{ height: "100%" }}
//       >
//         {slides.map((text, index) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 height: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundImage: `url(${BackgroundImg})`,
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 textAlign: "center",
//                 color: "white",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//               }}
//             >
//               <p style={{ color: "blue" }}>{text}</p>

//               {/* Delete Icon */}
//               <FaTrash
//                 onClick={() => handleDelete(index)}
//                 style={{
//                   position: "absolute",
//                   marginLeft: 400,
//                 }}
//                 size={40}
//                 color="red"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div style={{ marginTop: "20px", textAlign: "center" }}>
//         <button
//           onClick={goToPrev}
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             marginRight: "20px",
//           }}
//         >
//           Previous
//         </button>
//         <button
//           onClick={goToNext}
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoyaltyCard;
