import CustomToast from "./Custom/CustomToast";
import { ReactQueryProvider } from "./Hooks/ReactQueryProvider";
import "./index.css";
import routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import BackToTop from "./Components/BackToTop";

const App = () => {
  return (
    <>
      <ReactQueryProvider>
        <RouterProvider router={routes} />
      </ReactQueryProvider>
      <BackToTop />
      <CustomToast />
    </>
  );
};
export default App;
