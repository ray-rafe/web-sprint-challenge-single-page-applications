import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Home from "./components/homePage";
import OrderForm from "./components/form";
import OrderConfirmation from "./components/confirmation";
import axios from "axios";
import * as yup from "yup";
import schema from "./components/formSchema";

const API_URL = "https://reqres.in/api/orders";

const initialFormValues = {
  // Text inputs
  username: "",
  email: "",
  specialInstructions: "",
  // Dropdown
  sizeDropDown: "",
  // Checkboxes
  cheese: false,
  pepperoni: false,
  sausage: false,
  onions: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  sizeDropDown: "",
  specialInstructions: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post(API_URL, newOrder)
      .then((res) => {
        setOrders([...orders, newOrder]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    console.log("trying to submit the form");
    const newOrder = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      sizeDropDown: formValues.sizeDropDown.trim(),
      toppings: ["cheese", "pepperoni", "sausage", "onions"].filter(
        (topping) => formValues[topping]
      ),
      specialInstructions: formValues.specialInstructions.trim(),
    };
    postNewOrder(newOrder);
  };
  // useEffect(() => {
  //   getOrders()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link id="order-pizza" to="/pizza">
          Order
        </Link>
      </nav>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/confirmation">
          {orders.map((order) => {
            return <OrderConfirmation key={order.id} details={order} />;
          })}
          <OrderConfirmation />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <p></p>
    </>
  );
};
export default App;
