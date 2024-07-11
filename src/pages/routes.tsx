import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/global/layout";
import Catalog from "./catalog";
import Admin from "./admin";
import InstagramButton from "../components/shared/instagram-button";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Catalog />
        </>
      ),
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return (
    <>
      <InstagramButton />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
};
