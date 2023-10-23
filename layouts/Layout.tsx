import { Footer } from "@/components/commons/Footer";
import { Header } from "@/components/commons/Header";
import { SearchFilterContextProvider } from "@/context/SearchFilterContext";
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
        <SearchFilterContextProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </SearchFilterContextProvider>
      </ShoppingCartContextProvider>
    </>
  );
};

export { Layout };
