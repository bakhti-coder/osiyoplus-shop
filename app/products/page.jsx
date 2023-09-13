"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryProduct, setCategoryProduct] = useState();
  const [category, setCategory] = useState([]);
  const [ctgrId, setCtgrId] = useState();
  const [categoryIdData, setCatgeroyIdData] = useState(null);
  const [ctgTru, setCtgTru] = useState(false);
  const [ctgrName, setCtgrName] = useState();

  //////////// Get Products ////////////
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3333/getproduct");
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  //////////// Get Category ////////////
  useEffect(() => {
    const getCategory = () => {
      try {
        axios.get("http://localhost:3333/get_category").then((res) => {
          setCategory(res.data);
        });
      } catch (error) {
        alert("Serverda xatolik yuz berdi :( ");
      }
    };
    getCategory();
  }, []);

  //////////// Get CategoryId ////////////
  const handleCategory = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/get_category_with_products/${id}`
      );
      setCatgeroyIdData(response.data.Products);
      setCtgTru(true);
    } catch (error) {
      alert("Serverda xatolik yuz berdi");
    }
  };

  return (
    <main className="container max-w-1200 ">
      <section>
        <div className="py-12">
          <form className="flex items-center pb-10 mt-[40px]">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Search products..."
              />
            </div>
          </form>
          <div>
            <h1 className="py-5 text-3xl text-gray-950 font-semibold">
              {`Categorya bo'yicha`}
            </h1>
            <ul className="flex justify-between flex-wrap ">
              {category.map((category, idx) => (
                <li
                  key={idx}
                  onClick={(e) => {
                    handleCategory(category.category_id);
                    setCtgrId(category.category_id);
                    setCtgrName(category.category_name)
                  }}
                  className="bg-white border  active:border-blue-600 border-blue-800 hover:bg-blue-50 py-1 px-2.5 rounded-full font-normal cursor-pointer lg:mx-0 mx-2 mt-5 lg:my-0 my-2 "
                >
                  {category.category_name}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="text-lg text-black my-4 lg:mx-0 mx-5">{ctgrName}</h1>
          {ctgTru ? (
            <div className="grid grid-cols-1 justify-center sm:justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
              {categoryIdData.map((data, idx) => (
                <Link key={idx} href={`/products/${data.pro_id}`}>
                  <div className="hover:shadow-xl bg-gray lg:mx-0 mx-5  border border-lightGray p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 h-full">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={`http://localhost:3333${data.pro_img}`}
                      alt="image"
                    />
                    <div className="font-semibold items-center mt-4 mb-1">
                      <p className="w-full truncate my-2">{data.pro_name}</p>
                      <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {data.pro_price} so'm
                      </p>
                    </div>
                    <p className="leading-relaxed text-base line-clamp-2">
                      {data.pro_description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}

          <hr className="bg-black w-full my-10" />
          <h1 className="my-10 text-3xl text-gray-950 font-semibold">
            Hamma mahsulotlar
          </h1>
          <div className="grid grid-cols-1 justify-center sm:justify-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
            {loading
              ? "Malumotlar yuklanmoqda..."
              : products
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.pro_name.toLowerCase().includes(search);
                  })
                  .map((product, idx) => (
                    <Link key={idx} href={`/products/${product.pro_id}`}>
                      <div className="hover:shadow-xl lg:mx-0 mx-5 bg-gray  border border-lightGray p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 h-full">
                        <img
                          className="h-40 rounded w-full object-cover object-center mb-6"
                          src={`http://localhost:3333${product.pro_img}`}
                          alt="image"
                        />
                        <div className="font-semibold items-center mt-4 mb-1">
                          <p className="w-full truncate my-2">
                            {product.pro_name}
                          </p>
                          <p className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                            {product.pro_price} so'm
                          </p>
                        </div>
                        <p className="leading-relaxed text-base line-clamp-2">
                          {product.pro_description}
                        </p>
                      </div>
                    </Link>
                  ))}
          </div>
        </div>
      </section>
    </main>
  );
}
