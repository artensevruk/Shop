import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Registration } from "./components/Registration";
import { Catalog } from "./components/Catalog";
import { ItemContainer } from "./components/ItemContainer";
import { Entrance } from "./components/Entrance";
import { Basket } from "./components/Basket";

const router = createBrowserRouter(
  [
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: "registration",
          element: <Registration />,
        },
      
        {
          path: "",
          element: <><Catalog /><ItemContainer /></> 
        },
      ],
    },
    
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


//   const router2 = createBrowserRouter(
//     [
//     {
//         path: "/",
//         element: <App />,
//         children: [
//           {
//             path: "entrance",
//             element: <Entrance />,
//           },
        
//           {
//             path: "",
//             element: <><Catalog /><ItemContainer /></> 
//           },
//         ],
//       },
      
//     ]);



// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router2} />
//   </React.StrictMode>
// );


const router3 = createBrowserRouter(
  [
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: "basket",
          element: <Basket />,
        },
      
        {
          path: "",
          element: <><Catalog /><ItemContainer /></> 
        },
      ],
    },
    
  ]);

  const root3 = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router3} />
    </React.StrictMode>
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
