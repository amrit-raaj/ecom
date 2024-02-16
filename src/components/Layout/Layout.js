import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div
        style={{
          position: "-webkit-sticky",
          zIndex: "2",
          position: "sticky",
          top: "0",
        }}
      >
        <Header />
      </div>
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Ecommerce App - shop now",
  description: "mernstack project",
  keywords: "mern,react,node,mongodb",
  author: "Amrit Raj",
};
export default Layout;
