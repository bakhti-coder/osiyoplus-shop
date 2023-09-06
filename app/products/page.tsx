"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsType } from "../interface/productsType";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [saveCtgr, setSaveCtgr] = useState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("http://172.20.10.3:3333/getproduct");
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleCategory = (e: any) => {
    e.preventdefault();

    axios
      .post("url", saveCtgr)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
                    stroke-linecap="round"
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
                placeholder="Search name..."
              />
            </div>
          </form>
          <div className="mt-10 my-8">
            {/* <ul className="flex justify-between flex-wrap ">
              <li
                onClick={(e) => {
                  handleCategory(e);
                  setSaveCtgr(el.category_id)
                }}
                className="font-normal cursor-pointer lg:px-0 px-2 mt-5 lg:my-0 my-2 "
              >
                {`Woman’s Fashion`}
              </li>
            </ul> */}
          </div>
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
                      <div className="  border border-lightGray p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 h-full">
                        <img
                          className="h-40 rounded w-full object-cover object-center mb-6"
                          src={`http://172.20.10.3:3333${product.pro_img}`}
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
