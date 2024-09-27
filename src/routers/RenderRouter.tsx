import { ReactNode } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import About from "../page/About";
import Home from "../page/Home";
import Product from "../page/Product";

export interface IRoute {
  path: string;
  layout?: () => ReactNode;
  element?: () => ReactNode;
  pages?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/",
    layout: () => <DefaultLayout />,
    pages: [
      {
        path: "/",
        element: () => <Home />,
      },
      {
        path: "home",
        element: () => <About />,
      },
      {
        path: "home",
        element: () => <Product />,
      },
    ],
  },
];
