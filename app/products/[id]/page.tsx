import { ProductsType } from "@/app/interface/productsType";
import axios from "axios";
import SingleProducts from "../components/product";

async function getDetailProducts(id: string) {
  const { data } = await axios.get(
    `https://64de00bd825d19d9bfb1db68.mockapi.io/products/${id}`
  );

  return data;
}
async function getProducts() {
  const { data } = await axios.get(
    "https://64de00bd825d19d9bfb1db68.mockapi.io/products"
  );

  return data;
}

const SingleProduct = async ({ params }: { params: { id: string } }) => {
  const data = await getDetailProducts(params.id);
  const pr: ProductsType[] = await getProducts();

  return (
    <>
      <div className="container max-w-1200 py-20">
        <SingleProducts data={data} pr={pr} />
      </div>
    </>
  );
};

export default SingleProduct;
