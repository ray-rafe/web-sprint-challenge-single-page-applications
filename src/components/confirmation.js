import React from "react";

function OrderConfirmation({ details }) {
  if (!details) {
    return <h3>Working on fetching your order confirmation...</h3>;
  }
  return (
    <div className="order container">
      <h2>{details.username}</h2>
      <p>Confirmation sent to {details.email}</p>
      <p>Size: {details.sizeDropDown}</p>

      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
