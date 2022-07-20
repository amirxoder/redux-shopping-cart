//style
import "./App.css";

//components
import Store from "./components/Store";

//redux
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Store />
    </Provider>
  );
}

export default App;
