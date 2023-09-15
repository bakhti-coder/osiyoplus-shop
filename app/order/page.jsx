"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = () => {
  const token = localStorage.getItem("token");
  const [orderLoading, setOrderLoading] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:1010/get_order_user",
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        setOrder(data.Orders);
        setOrderLoading(true);
      } catch (error) {
        alert("Serverda xatolik yuz berdi");
      }
    };
    getProducts();
  }, []);

  return (
    <section>
      <div className="container max-w-1200 py-20">
        <h1 className="text-center mb-10 text-3xl text-dark font-semibold">
          Mening buyurtmalarim
        </h1>
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Nomi
              </th>
              <th scope="col" className="px-6 py-3">
                Narxi
              </th>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                User Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Buyurtma vaqti
              </th>
            </tr>
          </thead>
          <tbody>
            {orderLoading
              ? order.map((order, idx) => (
                  <tr className=" border border-gray-300 bg-gray">
                    <td className="w-25 p-2">
                      <div className="flex items-center">
                        <img
                          src={`http://localhost:1010${order.order_img}`}
                          alt="Image"
                          style={{ width: "100px" }}
                        />
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {order.order_name}
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      {order.order_price}
                      {`so'm`}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {order.user_name}
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {order.user_phone}
                    </td>
                    <td className="px-6 py-4 text-gray-900">12.02.1984</td>
                  </tr>
                ))
              : "Mahsulotlar yuklanmoqda..."}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Order;
