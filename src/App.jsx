import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./Routes/AppRoutes";


function App() {
  return (
    <HelmetProvider>
      <div className="custom-scrollbar">
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App;
