import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ShoppingCartContextProvider>
        <Header />
        {children}
        <Footer />
      </ShoppingCartContextProvider>
    </>
  );
};

export { Layout };
