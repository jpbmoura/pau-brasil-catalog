import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/global/layout";
import Catalog from "./catalog";
import Admin from "./admin";
import SocialButton from "../components/shared/social-button";

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
      <SocialButton />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
};
