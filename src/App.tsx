import { MuiThemeProvider } from "./theme";
import { AppRouter } from "./views/root/AppRouter";

function App() {
  return (
    <MuiThemeProvider>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
