import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/common/Header";
import Signup from "./pages/SignupPage";
import Signin from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import RestaurantList from "./pages/RestaurantList";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/signin" exact>
              <Signin />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/restaurant/:id" exact>
              <RestaurantPage />
            </Route>
            <Route path="/restaurant/:id/detail" exact>
              <RestaurantDetailPage />
            </Route>
            <Route path="/restaurantList" exact>
              <RestaurantList />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}
