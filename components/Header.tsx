import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { HeaderNavbar } from "./HeaderNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 grid grid-cols-5 bg-layout-blue">
      <div className="col-span-1 flex items-center justify-center">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/icons/store-logo.svg"
            alt="Success-store Logo"
            width={99}
            height={39}
          />
        </Link>
      </div>
      <SearchBar className="col-span-2" />
      <HeaderNavbar className="col-span-2" />
    </header>
  );
};

export { Header };
