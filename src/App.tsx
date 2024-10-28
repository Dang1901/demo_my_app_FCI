import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import DefaultLayout from "./layout/DefaultLayout";
// import About from "./page/About";
// import Authentication from "./page/auth";
// import Checkout from "./page/Checkout";
// import Home from "./page/Home";
// import Product from "./page/Product";
// import Students from "./page/Students";
// import TicTacToe from "./page/TicTacToe";
// import AddUserForm from "./page/User/Action/Add";
// import EditUserForm from "./page/User/Action/Edit";
// import ListPost from "./page/User/ListPost";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Home = React.lazy(() => import("./page/Home"));
const Product = React.lazy(() => import("./page/Product"));
const Checkout = React.lazy(() => import("./page/Checkout"));
const Students = React.lazy(() => import("./page/Students"));
const TicTacToe = React.lazy(() => import("./page/TicTacToe"));
const ListPost = React.lazy(() => import("./page/User/ListPost"));
const AddUserForm = React.lazy(() => import("./page/User/Action/Add"));
const EditUserForm = React.lazy(() => import("./page/User/Action/Edit"));

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
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="checkout" element={<Checkout />} />
          {/* <Route path="authentication" element={<Authentication />} /> */}
          <Route path="product" element={<Product />} />
          <Route path="student" element={<Students />} />
          <Route path="posts" element={<ListPost />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          {/* <Route path="add" element={<AddUser />} /> */}
        </Route>

        <Route path="/posts" element={<DefaultLayout />}>
          <Route index element={<ListPost />} />
          <Route path="add" element={<AddUserForm />} />
          <Route path="edit/:id" element={<EditUserForm />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );

  // <RouterProvider router={router}/>
}

export default App;
