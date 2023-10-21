import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 flex space-x-3 bg-layout-blue">
      <div className="w-1/6 justify-center items-center">
        <Image
          src="/mundoexito.svg"
          alt="Success-store Logo"
          width={99}
          height={39}
        />
      </div>
      <div className="w-2/6">
        <div>
          <label>Input what you want to find</label>
          <input placeholder="Search categories"></input>
        </div>
        <ul>
          <li>
            <a>Electronics</a>
          </li>
          <li>
            <a>Jewelery</a>
          </li>
          <li>
            <a>Men&apos;s clothing</a>
          </li>
          <li>
            <a>Women&apos;s clothing</a>
          </li>
        </ul>
        <button>
          <svg>Lupa</svg>
        </button>
      </div>
      <div className="w-3/6 h-full flex items-center">
        <nav className="w-full flex">
          <ul className="w-full flex justify-around">
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>My account</a>
            </li>
            <li>
              <a>My account</a>
            </li>
            <li>
              <a>
                Shopping cart
                <i></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
