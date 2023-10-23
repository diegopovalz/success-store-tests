interface FooterNavbarProps {
  className?: string;
}

const FooterNavbar = ({ className }: FooterNavbarProps) => {
  let navClasses = "flex items-center justify-around";
  if (className) navClasses += ` ${className}`;

  return (
    <nav className={navClasses}>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-semibold text-blue-400">Product</h3>
        <ul>
          <li>
            <span className="text-white">Features</span>
          </li>
          <li>
            <span className="text-white">Pricing</span>
          </li>
          <li>
            <span className="text-white">Case studies</span>
          </li>
          <li>
            <span className="text-white">Reviews</span>
          </li>
          <li>
            <span className="text-white">Updates</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-semibold text-blue-400">Company</h3>
        <ul>
          <li>
            <span className="text-white">About</span>
          </li>
          <li>
            <span className="text-white">Contact us</span>
          </li>
          <li>
            <span className="text-white">Careers</span>
          </li>
          <li>
            <span className="text-white">Culture</span>
          </li>
          <li>
            <span className="text-white">Blog</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-semibold text-blue-400">Support</h3>
        <ul>
          <li>
            <span className="text-white">Getting started</span>
          </li>
          <li>
            <span className="text-white">Help center</span>
          </li>
          <li>
            <span className="text-white">Server status</span>
          </li>
          <li>
            <span className="text-white">Report a bug</span>
          </li>
          <li>
            <span className="text-white">Chat support</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-semibold text-blue-400">Downloads</h3>
        <ul>
          <li>
            <span className="text-white">iOS</span>
          </li>
          <li>
            <span className="text-white">Android</span>
          </li>
          <li>
            <span className="text-white">Mac</span>
          </li>
          <li>
            <span className="text-white">Windows</span>
          </li>
          <li>
            <span className="text-white">Chrome</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { FooterNavbar };
