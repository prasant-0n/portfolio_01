// src/routes.tsx
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Ensure correct import

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const RoutesComponent = () => {
  return <RouterProvider router={appRouter} />;
};

export default RoutesComponent;
