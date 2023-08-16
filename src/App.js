import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./component/ErrorPage";
import Roote from "./component/Roote";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import Food from "./component/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "food", element: <Food /> },
      { path: "food/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
