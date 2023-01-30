import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductComponent from "./components/ProductComponent";
import ProductListing from "./components/ProductListing";
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 error</Route>
      </Switch>
    </Router>
  );
}

export default App;
