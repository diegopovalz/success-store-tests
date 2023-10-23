import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";

interface HeaderNavbarProps {
  className?: string;
}

const HeaderNavbar = ({ className }: HeaderNavbarProps) => {
  let navClasses = "flex items-center justify-center";
  if (className) navClasses += ` ${className}`;

  return (
    <nav className={navClasses}>
      <ul className="w-full flex justify-around">
        <li>
          <Link href="/" className="text-white font-medium text-xl">
            Categories
          </Link>
        </li>
        <li>
          <Link href="/" className="text-white font-medium text-xl">
            My account
          </Link>
        </li>
        <li>
          <Link href="/shopping-cart" className="cursor-pointer">
            <BsFillCartFill size={26} color="white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { HeaderNavbar };
