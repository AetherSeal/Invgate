import Header from "./header";
import Footer from "./footer";
import Window from "./window/window";
import GeneralContextProvider from "../contexts/generalContext";
import ListContextProvider from "../contexts/listContext";
import "../App.css";

export default function Invgate() {
  return (
    <ListContextProvider>
      <GeneralContextProvider>
        <Header></Header>
        <Window></Window>
        <Footer></Footer>
      </GeneralContextProvider>
    </ListContextProvider>
  );
}
