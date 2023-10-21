import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-layout-blue">
      <section className="grid grid-cols-5 debug">
        <div>
          <Image
            src="/mundoexito.svg"
            alt="Mundoexito Logo"
            width={118}
            height={56}
          />
          <p>Find everything for you and your home. Online shopping!</p>
          <ul>
            <li>
              <svg>Facebook</svg>
            </li>
            <li>
              <svg>X</svg>
            </li>
            <li>
              <svg>Instagram</svg>
            </li>
            <li>
              <svg>LinkedIn</svg>
            </li>
            <li>
              <svg>Youtube</svg>
            </li>
          </ul>
        </div>
        <div>
          <h3>Product</h3>
          <ul>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Case studies</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Updates</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Culture</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>
              <a>Getting started</a>
            </li>
            <li>
              <a>Help center</a>
            </li>
            <li>
              <a>Server status</a>
            </li>
            <li>
              <a>Report a bug</a>
            </li>
            <li>
              <a>Chat support</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Downloads</h3>
          <ul>
            <li>
              <a>iOS</a>
            </li>
            <li>
              <a>Android</a>
            </li>
            <li>
              <a>Mac</a>
            </li>
            <li>
              <a>Windows</a>
            </li>
            <li>
              <a>Chrome</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <span>Copyright 2023 Juan Zora Dev</span>
      </section>
    </footer>
  );
};

export { Footer };
