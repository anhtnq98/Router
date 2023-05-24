import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>This is product</h3>
      {/* Sử dụng useNavigate với một tham số */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>

      {/* Sử dụng useNavigate với history */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>

      {/* Sử dụng useNavigate với replace = true */}
      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Go to About với Replace
      </button>

      {/* Sử dụng useNavigate để truyền dữ liệu từ component này sang component khác (Cách quan trọng) */}
      <button
        onClick={() => {
          navigate("/about", {
            state: {
              course: "ReactJS",
              company: "RA",
            },
          });
        }}
      >
        Data
      </button>
    </div>
  );
}

export default Product;
