import Image from "next/image";
import { SocialButtons } from "./SocialButtons";
import { FooterNavbar } from "./FooterNavbar";

const Footer = () => {
  return (
    <footer className="w-screen bg-layout-blue border-2 border-indigo-400">
      <section className="grid grid-cols-6 p-5">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <Image
              src="/icons/store-logo.svg"
              alt="Mundoexito Logo"
              width={118}
              height={56}
            />
            <p className="text-white mr-16">
              Find everything for you and your home. Online shopping!
            </p>
            <SocialButtons className="flex gap-x-2" size="32" />
          </div>
        </div>
        <FooterNavbar className="col-span-4" />
      </section>
      <section>
        <span className="flex justify-center text-white mt-4">
          &copy; 2023 Juan Zora Dev
        </span>
      </section>
    </footer>
  );
};

export { Footer };
