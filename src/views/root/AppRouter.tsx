import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Error } from "../error/Error";
import { RecipeWorkshop } from "../recipeWorkshop";
import { Dashboard } from "../../components/dashboard";
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
