import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { BagProvider } from "./context/useBag";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";
import { ListingProvider } from "./context/useListing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <BagProvider>
        <ListingProvider>
          <GlobalStyles />
          <Router />
          <ToastContainer autoClose={3000} theme="colored" />
          <Footer />
        </ListingProvider>
      </BagProvider>
    </BrowserRouter>
  );
}

export default App;
