import React, { useEffect } from "react";

import apis from "./apis";

export default function ProductList() {
  const getData = () => {
    apis.products
      .getData()
      .then(
        (result) => {
          console.log(result.data);
        },
        (err) => {
          console.log("Lỗi call api products");
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
    apis.brands
      .getData()
      .then(
        (result) => {
          console.log(result.data);
        },
        (err) => {
          console.log("Lỗi call api brands");
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
    apis.categories
      .getData()
      .then(
        (result) => {
          console.log(result.data);
        },
        (err) => {
          console.log("Lỗi call api categories");
          console.log(err);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>ProductList</div>;
}
