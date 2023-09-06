import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'} 
      />
    </div>
  );
}

export default Subtotal;
