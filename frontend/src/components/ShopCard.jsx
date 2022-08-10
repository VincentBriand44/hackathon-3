import { Button, Card } from "react-daisyui";

function ShopCard({ card }) {
  return (
    <Card className="w-1/4" style={{ backgroundImage: `url(${card.image})` }}>
      <Card.Body className="bg-slate-500/50">
        <Card.Title tag="h2" className="text-slate-700">
          {card.title}
        </Card.Title>
        <Card.Actions className="justify-end">
          <Button color="primary">Acheter pour {card.price}€</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;
