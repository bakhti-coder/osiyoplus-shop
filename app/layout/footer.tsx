import Link from "next/link";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mb-5 md:py-20 max-w-1200 flex justify-between flex-col md:flex-row flex-wrap text-start">
        <div>
          <h1 className="text-lg font-semibold mt-8 md:mt-0 mb-4 md:mb-8">
            Aloqa
          </h1>
          <ul>
            <li className="flex"></li>
            <li className="flex items-start mt-4">
              <p className="text-sm ps-[10px] flex flex-col">
                <Link
                  className="mb-2 hover:text-sky-500 transition-colors"
                  href="tel:+998983084664"
                >
                  +998(99)308-46-64
                </Link>
                <Link
                  href="tel:+998995053333"
                  className="hover:text-sky-500 transition-colors mb-2"
                >
                  +998(99)505-33-33
                </Link>
                <Link
                  href="tel:+998994043333"
                  className="hover:text-sky-500 transition-colors mb-2"
                >
                  +998(99)404-33-33
                </Link>
              </p>
            </li>
            <li className="flex">
              <Link href="/" className="flex items-start mt-4">
                <p className="text-sm ps-[10px] hover:text-sky-500 transition-colors mb-2">www.osiyoplus.uz</p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mt-8 md:mt-0 mb-4 md:mb-8">
            Ijtimoiy tarmoqlar
          </h1>
          <ul>
            <li className="flex">
              <Link className="flex items-start mt-4" href="/">
                <BsInstagram size={18} />
                <p className="text-sm ps-[10px]">Instagram</p>
              </Link>
            </li>
            <li className="flex">
              <Link href="/" className="flex items-start mt-4">
                <BsFacebook size={18} />
                <p className="text-sm ps-[10px]">Facebook</p>
              </Link>
            </li>
            <li className="flex">
              <Link
                href="https://t.me/hamkorpolymercenter"
                className="flex items-start mt-4"
              >
                <BsTelegram size={18} />
                <p className="text-sm ps-[10px]">Telegram</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container max-w-1200 pb-5">
        <hr className="h-px mt-8 bg-gray-400 border-0" />
        <p className="text-gray-400 text-xs text-center mt-5 ">© 2023 Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
}
