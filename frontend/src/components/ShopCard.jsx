import { openDB } from "idb";
import { useContext } from "react";
import { Button, Card } from "react-daisyui";
import CartContext from "../context/CartContext";

function ShopCard({ card }) {
  const { cartData, setCartData } = useContext(CartContext);
  const handleClick = async () => {
    const db = await openDB("scr", 1);
    const storeCart = db.transaction("cart", "readwrite").objectStore("cart");
    storeCart.add({
      title: card.title,
      price: card.price,
    });
    setCartData([...cartData, card]);
  };

  return (
    <Card className="w-1/4" style={{ backgroundImage: `url(${card.image})` }}>
      <Card.Body className="bg-slate-500/50">
        <Card.Title tag="h2" className="text-slate-700">
          {card.title}
        </Card.Title>
        <Card.Actions className="justify-end">
          <Button color="primary" onClick={async () => handleClick(card.index)}>
            Acheter pour {card.price}€
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;
