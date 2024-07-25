import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home page</div>,
    errorElement: <div>Something went wrong</div>,
  },
]);
