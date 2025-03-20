import { useEffect } from "react";
import { DEFAULT_APP_TITLE } from "../../../globalDefaults";
import { RecipeCreator } from "../../../components/recipeCreator";

export const RecipeWorkshop = () => {
  useEffect(() => {
    document.title = `${DEFAULT_APP_TITLE} - Recipe Workshop`;
  }, []);
  return (
    <div>
      <RecipeCreator />
    </div>
  );
};
