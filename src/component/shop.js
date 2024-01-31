import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Action from "../component/redux/action/category/category-action";
// import { useNavigation } from "react-router-dom";

const Shop = () => {
  const [loading, setLoading] = useState(false);
//   const nav = useNavigation();
  const { categories } = useSelector((state) => state.shop);

  console.log("categoriescreen");
  console.log(categories);
  console.log("categoriescreen");

  const dispatch = useDispatch();

  const getCategories = async () => {
    await dispatch(Action.getAllCategories());
  };

  useEffect(() => {
    // setLoading(true);
    getCategories();
    // setLoading(false);
  }, []);

  
  // if (loading) {
  //     return (
  //         <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //             <ActivityIndicator size="large" color="#00ff00" />
  //         </div>
  //     )
  // }

  return (
    <div style={{ marginVertical: 10 }}>
      {categories.map((item) => (
        <div><p>{item}</p></div>
      ))}

      {/* <button onPress={() => nav.navigate("Products")}>
        <div>Show All Products</div>
      </button>
      <button onPress={() => nav.navigate("Products")}>
        <div>Show limited Products</div>
      </button> */}
    </div>
  );
};

export default Shop;
