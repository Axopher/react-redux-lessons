import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const { currentlyFetching } = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />

      {/* this is a bad practice because FetchItems is not a component just api calling mechanism, find ways to improve this */}
      <FetchItems />
      {currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
