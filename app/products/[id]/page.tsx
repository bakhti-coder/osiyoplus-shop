"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ProductsType } from "@/app/interface/productsType";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactModal from "react-modal";


const SingleProduct = () => {
  const [products, setProduct] = useState<ProductsType>();
  const [pr, setPr] = useState<ProductsType>();

  const [message, setMessage] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendProduct, setSendProduct] = useState<any>();
  const [sendUsername, setSendUsername] = useState("");
  const [sendUserPhoneNumber, setSendUserPhoneNumber] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handlePhoneNumberChange = (value: any) => {
    if (value && value.length === 7) {
      setPhoneNumber(value);
    }
    setSendUserPhoneNumber(value);
  };

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      axios.post("http://172.20.10.3:3333/post_order", {
        "order_name": sendProduct?.pro_name,
        "order_price": sendProduct?.pro_price,
        "order_description":sendProduct?.pro_description,
        "order_img": sendProduct?.pro_img,
        "user_name": sendUsername,
        "user_phone": sendUserPhoneNumber,
      }).then((res) => {
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
          window.location.reload();
        }, 4000);
      });
    } catch (error) {
      alert("Serverda xatoloik yuz berdi");
    }
  };

  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://172.20.10.3:3333/get_pro_id/${id}`);
      const product = await res.json();
      setProduct(product);
    }

    getData();
  }, [id]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://172.20.10.3:3333/getproduct`);
      const product = await res.json();
      setPr(product);
    }
    getData();
  }, []);

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "auto", // Modalning 90% ekran enini egallash
            maxWidth: "300px", // Eng katta o'lcham
            margin: "auto", // Markazga centrlash
            paddingTop: "15px",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            background: "white", // Markazga centrlash
            border: "none",
            height: "25%",
          },
        }}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
      >
        <form onSubmit={(e) => sendData(e)}>
          <div className="mt-2">
            <input
              onChange={(e) => setSendUsername(e.target.value)}
              type="text"
              name="user_name"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              placeholder="Ismingiz"
              required
            />
          </div>
          <div className="my-2">
          <PhoneInput
              international
              type="tel"
              id="first_name"
              limitMaxLength={true}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              required
              defaultCountry="UZ"
              value={phoneNumber}
              onChange={(e) => handlePhoneNumberChange(e)}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className=" bg-orange text-white py-3  rounded-full hover:shadow-md w-full"
            >
              {`Buyurtma berish`}
            </button>
          </div>
        </form>
      </ReactModal>
      <div className="container max-w-1200 py-20">
          <div className="flex justify-start flex-wrap md:flex-nowrap ">
        <div className="max-w-[600px]">
          <img
            src={`http://172.20.10.3:3333${products?.pro_img}`}
            alt="image"
            style={{ width: "1200px", height: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="md:pt-0 pt-5 ml-0 md:ml-20 w-full">
          <h1 className="text-[24px] font-bold">{products?.pro_name}</h1>
          <p className="mt-3 font-medium text-[24px]">
            {" "}
            <span className="font-bold text-[26px]">Narxi:</span>{" "}
            {products?.pro_price} so'm
          </p>
          <p className="mt-5 text-sm">{products?.pro_description}</p>
          <hr className="h-px my-8 bg-line border-0" />
          <button
            onClick={() => {
              setSendProduct(products);
              openModal();
            }}
            className="text-white bg-orange hover:shadow-xl max-w-full w-1/2 font-medium rounded-lg text-sm px-4 py-2.5 text-center "
          >
            Buyurtma berish
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleProduct;
