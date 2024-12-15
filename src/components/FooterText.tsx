import Link from "next/link";

const FooterText = () => {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center text-zinc-400 text-sm">
      <div>Frontude © 2024 — where the future is built</div>
      <div className="flex gap-6">
        <Link href="/info" className="hover:text-white transition-colors">
          info
        </Link>
        <Link href="/newsletter" className="hover:text-white transition-colors">
          newsletter
        </Link>
        <Link href="/instagram" className="hover:text-white transition-colors">
          instagram
        </Link>
        <Link href="/contact" className="hover:text-white transition-colors">
          contact
        </Link>
      </div>
    </div>
  );
};

export default FooterText;
