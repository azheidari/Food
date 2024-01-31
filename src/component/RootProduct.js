import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ProductNavigation from "./ProductNavigation";

function RootProduct() {
  const navigation = useNavigation();

  return (
    <>
      <ProductNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading........</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootProduct;
