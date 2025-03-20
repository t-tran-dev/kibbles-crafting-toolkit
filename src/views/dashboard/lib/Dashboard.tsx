import { useEffect } from "react";
import { DEFAULT_APP_TITLE } from "../../../globalDefaults";

export const Dashboard = () => {
  useEffect(() => {
    document.title = `${DEFAULT_APP_TITLE} - Dashboard`;
  }, []);
  return <div>Dashboard</div>;
};
