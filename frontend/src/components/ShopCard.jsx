import { openDB } from "idb";
import { useState } from "react";
import { Button, Card } from "react-daisyui";

function ShopCard({ card }) {
  const handleClick = async () => {
    const [itemsData, setItemsData] = useState([]);

    const db = await openDB("scr", 1);
    const storeCart = db.transaction("cart", "readwrite").objectStore("cart");
    storeCart.add({
      title: card.title,
      price: card.price,
    });
    itemsData.forEach((item) => storeCart.delete(item.id));
    setItemsData(() => []);
  };

  return (
    <Card className="w-1/4" style={{ backgroundImage: `url(${card.image})` }}>
      <Card.Body className="bg-slate-500/50">
        <Card.Title tag="h2" className="text-slate-700">
          {card.title}
        </Card.Title>
        <Card.Actions className="justify-end">
          <Button color="primary" onClick={() => handleClick(card.index)}>
            Acheter pour {card.price}€
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;
