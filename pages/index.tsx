import Image from "next/image";

const Home = () => {
  return (
    <div>
      <header>
        <Image
          src="/mundoexito.svg"
          alt="Mundoexito Logo"
          width={99}
          height={39}
        />
        <div>
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
        <div>
          <nav>
            <ul>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>My account</a>
              </li>
            </ul>
          </nav>
          <a>
            Shopping cart
            <i></i>
          </a>
        </div>
      </header>
      <main>
        <section>
          <img alt="Landing image"></img>
        </section>
        <section>
          <h2>Explore products</h2>
          <div></div>
        </section>
        <section>
          <h2>Explore categories</h2>
          <div></div>
        </section>
      </main>
      <footer>
        <section>
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
            <div>
              <section>
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
              </section>
              <section>
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
              </section>
              <section>
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
              </section>
              <section>
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
              </section>
            </div>
          </div>
        </section>
        <section>
          <p>Copyright 2023 Juan Zora Dev</p>
        </section>
      </footer>
    </div>
  );
};

export default Home;
