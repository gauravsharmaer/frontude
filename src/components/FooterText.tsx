import Link from "next/link";
import frontudeFooterImage from "../assets/frontudeFooterImage.svg";
import Image from "next/image";
const FooterText = () => {
  return (
    <>
      <div
        className="w-full  py-4 flex flex-col md:flex-row 
    justify-between items-center text-zinc-400 text-sm gap-4 md:gap-0"
      >
        <div className="text-center md:text-left">
          Frontude © 2024 — where the future is built
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <Link href="/info" className="hover:text-white transition-colors">
            info
          </Link>
          <Link
            href="/newsletter"
            className="hover:text-white transition-colors"
          >
            newsletter
          </Link>
          <Link
            href="/instagram"
            className="hover:text-white transition-colors"
          >
            instagram
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            contact
          </Link>
        </nav>
      </div>
      <div className="w-full flex justify-center items-center py-4  pb-10">
        <Image
          src={frontudeFooterImage}
          alt="frontude footer image"
          className="opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out"
        />
      </div>
    </>
  );
};

export default FooterText;
