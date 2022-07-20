//style
import "./App.css";

//components
import Store from "./components/Store";

//redux
import store from "./redux/store";
import { Provider } from "react-redux";

//react router dom
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </Provider>
  );
}

export default App;
