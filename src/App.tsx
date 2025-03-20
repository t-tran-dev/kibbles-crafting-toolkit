import { MuiThemeProvider } from "./themeGlobal";
import { AppRouter } from "./views/root/AppRouter";

function App() {
  return (
    <MuiThemeProvider>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
