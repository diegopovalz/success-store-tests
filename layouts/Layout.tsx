import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ShoppingCartContextProvider>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </ShoppingCartContextProvider>
    </>
  );
};

export { Layout };
