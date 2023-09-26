"use client";

import { ProductsType } from "../interface/productsType";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: ProductsType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={`http://localhost:1010${product.pro_img}`}
          alt={`http://localhost:1010${product.pro_name}`}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={`http://localhost:1010${product.pro_img}`}
          alt={`http://localhost:1010${product.pro_name}`}
          width={80}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
        />
      )}
    </>
  );
};

export default CustomImage;
