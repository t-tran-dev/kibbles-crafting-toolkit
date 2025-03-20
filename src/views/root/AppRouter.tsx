import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "../error";
import { Dashboard } from "../dashboard";
import { RecipeWorkshop } from "../recipeWorkshop";
import { AppRoutes } from "./AppRoutes";
import { ContentLayout } from "./ContentLayout";

const router = createBrowserRouter([
  {
    element: <ContentLayout />,
    errorElement: <Error />,
    children: [
      {
        path: AppRoutes.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: AppRoutes.RECIPE_WORKSHOP,
        element: <RecipeWorkshop />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
