import React from "react";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./page/Home";
// import About from "./page/About";
// import Checkout from "./page/Checkout";
import Product from "./page/Product";
import Authentication from "./page/auth";
import SignUp, { action } from "./page/auth/SignUp";
import Checkout from "./page/Checkout";
import About from "./page/About";
import Students from "./page/Students";


// const About = React.lazy(() => import("./page/About"));
// const Checkout = React.lazy(() => import("./page/Checkout"));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       { path: "home", element: <Home /> },
//       { path: "about", element: <About /> },
//       {
//         path: "checkout",
//         element: (
//           <React.Suspense fallback="Loading...">
//             <Checkout />
//           </React.Suspense>
//         ),
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//         action: action,
//       },
//       { path: "product", element: <Product /> },
//     ],
//   },
// ]);



function App() {
  return (
      <>
       <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="checkout"
            element={
              <React.Suspense fallback="Loading...">
                <Checkout />
              </React.Suspense>
            }
          />
          <Route path="authentication" element={<Authentication />} />
          <Route path="product" element={<Product />} />
          <Route path="student" element={<Students />} />
        </Route>
       </Routes>
      
    </>
  )
  
  // <RouterProvider router={router}/>
  

    
   

  
}

export default App;
