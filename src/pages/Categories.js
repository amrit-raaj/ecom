import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/Category.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3" key={c._id}>
              <strong>
                <Link
                  to={`/category/${c.slug}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button id="bottone1" className="btn btn-primary btn-block">
                    {c.name}
                  </button>
                </Link>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
