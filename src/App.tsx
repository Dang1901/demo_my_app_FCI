import { useRoutes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./page/Home";
import UseState from "./hooks/useState";
import Hook from "./page/Hook";
import UseContext from "./hooks/useContext";

import UseEffect from "./hooks/useEffect";
import UseMemo from "./hooks/useMemo";
import UseCallback from "./hooks/UseCallback";

// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
// const Home = React.lazy(() => import("./page/Home"));
// const Product = React.lazy(() => import("./page/Product"));
// const Checkout = React.lazy(() => import("./page/Checkout"));
// const Students = React.lazy(() => import("./page/Students"));
// const TicTacToe = React.lazy(() => import("./page/TicTacToe"));
// const ListPost = React.lazy(() => import("./page/User/ListPost"));
// const AddUserForm = React.lazy(() => import("./page/User/Action/Add"));
// const EditUserForm = React.lazy(() => import("./page/User/Action/Edit"));

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
  const route = useRoutes([
    {
      path: "/",
      element: <DefaultLayout/>,
      children: [
        {
          path: "home",
          element: <Home />
        }
      ]
    },
    {
      path: "/",
      element: <DefaultLayout/>,
      children: [
        {
          path: "hooks",
          element: <Hook />,
          children: [
           {
            path: 'usestate',
            element: <UseState />
           },
           {
            path: 'usecontext',
            element: <UseContext />
           },
           {
            path: 'usecallback',
            element: <UseCallback/>
           },
           {
            path: 'useeffect',
            element: <UseEffect />
           },
           {
            path: 'usememo',
            element: <UseMemo />
           },
          ]
        }
      ]
    }
  ])

  return route;
}

export default App;
