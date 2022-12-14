import React, { FC, Suspense } from "react";
import Loading from "../common/Loading/Loading";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface IProps {
  children: React.ReactElement;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>{children}</Suspense>
      <Footer />
    </>
  );
};
export default Layout;
