import Link from "next/link";
import Image from "next/image";

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
          <Link href="/shopping-cart">
            <Image
              src="/icons/cart2.svg"
              alt="Shopping cart"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { HeaderNavbar };
