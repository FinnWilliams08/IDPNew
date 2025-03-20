import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemsList } from "../components/CartItemsList";
import { Column } from "../components/Column";
import { ConfirmModal } from "../components/ConfirmModal";
import { Row } from "../components/Row";
import { CartContext } from "../context/CartProvider";
import { getCartTotal, getNumberOfItemsInCart } from "../utils/cartManagement";
import './CheckOut.css'; // Import the CSS file

export const CheckOut = () => {
  const waitTime = 5 * 1000;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useContext(CartContext);

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(waitTime / 1000);

  useEffect(() => {
    if (isConfirmed) {
      setCartItems([]);
      setTimeout(() => navigate("/"), waitTime);
      setInterval(() => setTimeRemaining((pre) => pre - 1), 1000);
    }
  }, [isConfirmed]);

  return (
    <Column>
      {isConfirmed ? (
        <p>
          Thank You, your order has been confirmed. You will be redirected to
          the homepage in {timeRemaining} seconds...
        </p>
      ) : (
        <Column>
          <h2>User Info</h2>
          <CartItemsList />
          <Row style={{ justifyContent: "center" }}>
            <ConfirmModal
              label="Confirm Order"
              setIsConfirmed={setIsConfirmed}
            />
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </Row>
          <div className="delivery-info">
            <p>Delivery Time: ASAP (30 minutes)</p>
            <p>Driver Name: Alexander</p>
            <p>Driver Rating: ⭐⭐⭐⭐⭐ (4.9/5)</p>
          </div>
         
          <div className="reviews">
            <p>"Alexander was very professional and a lovely gentlemen!" - Mary Johnson</p>
            <p>"Quick and efficient delivery. Highly recommend!" - John Hughs</p>
            <p>"Great service, will order again!" - Steve Potter</p>
          </div>
        </Column>
      )}
    </Column>
  );
};
