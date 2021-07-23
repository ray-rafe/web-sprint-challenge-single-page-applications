import React from "react";
import { Link } from "react-router-dom";

export default function OrderForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;

    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Create an Order</h2>

        <div className="errors" name="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.sizeDropDown}</div>
          <div>{errors.specialInstructions}</div>
        </div>

        <div className="form-group inputs">
          <h3>Contact Info</h3>
          <label>
            Name&nbsp;
            <input
              id="name-input"
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <label>
            Email
            <input
              id="email"
              value={values.email}
              onChange={onChange}
              name="email"
              type="text"
            />
          </label>
        </div>
        <h2>Build Your Pizza</h2>
        <div className="form-group inputs">
          <h4>1. Size & Crust </h4>
          <label>
            Pick a Size
            <select
              id="size-dropdown"
              onChange={onChange}
              value={values.sizeDropDown}
              name="sizeDropDown"
            >
              <option value="">--Select Size--</option>
              <option value="small">Small 10"</option>
              <option value="medium">Medium 12"</option>
              <option value="large">Large 14"</option>
            </select>
          </label>
          <h4>2. Toppings </h4>
          <label>
            Cheese
            <input
              id="cheese"
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={onChange}
            />
          </label>
          <label>
            Pepperoni
            <input
              id="pepperoni"
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Sausage
            <input
              id="sausage"
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>
          <label>
            Onions
            <input
              id="onions"
              type="checkbox"
              name="onions"
              checked={values.onions}
              onChange={onChange}
            />
          </label>
          <h5>Special Instructions:</h5>
          <label>
            <input
              id="special-text"
              value={values.specialInstructions}
              onChange={onChange}
              name="specialInstructions"
              type="text"
            />
          </label>
        </div>
        <Link to="/confirmation"></Link>
        <button name="add-to-order" id="add-to-order" disabled={disabled}>
          Add to Order
        </button>
      </div>
    </form>
  );
}
