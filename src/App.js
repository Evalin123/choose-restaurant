import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/common/Header";
import Signup from "./pages/SignupPage";
import Signin from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import AfterRestaurantPage from "./pages/AfterRestaurantPage";
import RestaurantList from "./pages/RestaurantList";
import AboutPage from "./pages/AboutPage";
import BlackListPage from "./pages/BlackListPage";
import LockedPage from "./pages/LockedPage";

export default function App() {
  localStorage.setItem("Authorization", "Bearer keyAtYdf2pfxnig7B");
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
            <Route path="/restaurant/:id/after" exact>
              <AfterRestaurantPage />
            </Route>
            <Route path="/restaurantList" exact>
              <RestaurantList />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/blackList">
              <BlackListPage />
            </Route>
            <Route path="/lockedPage">
              <LockedPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}
