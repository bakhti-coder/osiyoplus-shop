// "use client";
// import { ProductsType } from "@/app/interface/productsType";
// import Link from "next/link";
// import React, { FC, useState } from "react";
// import ReactModal from "react-modal";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import axios from "axios";

// const SingleProducts: FC<{ data: ProductsType; pr: ProductsType[] }> = ({
//   data,
//   pr,
// }) => {
//   const [message, setMessage] = useState<boolean>(false);
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [sendProduct, setSendProduct] = useState<any>();
//   const [sendUsername, setSendUsername] = useState("");
//   const [sendUserPhoneNumber, setSendUserPhoneNumber] = useState("");

//   function openModal() {
//     setIsOpen(true);
//   }
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//   }
//   function closeModal() {
//     setIsOpen(false);
//   }
//   const handlePhoneNumberChange = (value: any) => {
//     if (value && value.length === 7) {
//       setPhoneNumber(value);
//     }
//     setSendUserPhoneNumber(value);
//   };

//   const sendData = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("pro_name", sendProduct?.pro_name);
//     formData.append("pro_description", sendProduct?.pro_description);
//     formData.append("pro_price", sendProduct?.pro_price);
//     formData.append("pro_id", sendProduct?.pro_id);
//     formData.append("user_name", sendUsername);
//     formData.append("use_phone_number", sendUserPhoneNumber);
//     try {
//       axios.post("asfasfaf", formData).then((res) => {
//         setMessage(true);
//         setTimeout(() => {
//           setMessage(false);
//           window.location.reload();
//         }, 4000);
//       });
//     } catch (error) {
//       alert("Serverda xatoloik yuz berdi");
//     }
//   };

//   return (
//     <>
//       {message ? <div></div> : ""}
//       <ReactModal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={{
//           content: {
//             width: "auto", // Modalning 90% ekran enini egallash
//             maxWidth: "300px", // Eng katta o'lcham
//             margin: "auto", // Markazga centrlash
//             paddingTop: "15px",
//             borderRadius: "10px",
//             boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
//             background: "white", // Markazga centrlash
//             border: "none",
//             height: "25%",
//           },
//         }}
//         contentLabel="Example Modal"
//         overlayClassName="modal-overlay"
//       >
//         <form onSubmit={(e) => sendData(e)}>
//           <div className="mt-2">
//             <input
//               onChange={(e) => setSendUsername(e.target.value)}
//               type="text"
//               name="user_name"
//               id="first_name"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
//               placeholder="Ismingiz"
//               required
//             />
//           </div>
//           <div className="my-2">
//             <PhoneInput
//               international
//               type="tel"
//               id="first_name"
//               limitMaxLength={true}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
//               required
//               defaultCountry="UZ"
//               value={phoneNumber}
//               onChange={(e) => handlePhoneNumberChange(e)}
//             />
//           </div>
//           <div className="w-full">
//             <button
//               type="submit"
//               className=" bg-orange text-white py-3  rounded-full hover:shadow-md w-full"
//             >
//               {`Buyurtma berish`}
//             </button>
//           </div>
//         </form>
//       </ReactModal>
//       <div className="flex justify-start flex-wrap md:flex-nowrap ">
//         <div className="max-w-[600px]">
//           <img
//             src={`http://localhost:3333${data.pro_img}`}
//             alt="image"
//             style={{ width: "1200px", height: "500px", objectFit: "cover" }}
//           />
//         </div>
//         <div className="md:pt-0 pt-5 ml-0 md:ml-20 w-full">
//           <h1 className="text-[24px] font-bold">{data.pro_name}</h1>
//           <p className="mt-3 font-medium text-[24px]">
//             {" "}
//             <span className="font-bold text-[26px]">Narxi:</span>{" "}
//             {data.pro_price} so'm
//           </p>
//           <p className="mt-5 text-sm">{data.pro_description}</p>
//           <hr className="h-px my-8 bg-line border-0" />
//           <button
//             onClick={() => {
//               setSendProduct(data);
//               openModal();
//             }}
//             className="text-white bg-orange hover:shadow-xl max-w-full w-1/2 font-medium rounded-lg text-sm px-4 py-2.5 text-center "
//           >
//             Buyurtma berish
//           </button>
//         </div>
//       </div>
//       <div className="mt-32">
//         <h1 className="py-5 text-2xl font-semibold">Boshqa mahsulotlar</h1>
//         <div className=" grid grid-cols-1 justify-center sm:justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
//           {pr.slice(0, 8).map((product, idx) => (
//             <Link key={idx} href={`/products/${product.pro_id}`}>
//               <div className="  border border-lightGray p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200">
//                 <img
//                   className="h-40 rounded w-full object-cover object-center mb-6"
//                   src={`http://localhost:3333${product.pro_img}`}
//                   alt="content"
//                 />

//                 <div className="font-semibold flex items-center justify-between mt-4 mb-1">
//                   <p className="w-32 truncate">{product.pro_name}</p>
//                   <p>{product.pro_price}so'm</p>
//                 </div>
//                 <p className="leading-relaxed text-base line-clamp-2">
//                   {product.pro_description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProducts;
