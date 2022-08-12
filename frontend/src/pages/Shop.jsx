import ShopCard from "../components/ShopCard";

function Shop() {
  const cards = [
    {
      index: 0,
      title: "Technique d'auto-défense",
      link: "training",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: 149.99,
    },
    {
      index: 1,
      title: "Kit de combat",
      link: undefined,
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: 1999.99,
    },
    {
      index: 2,
      title: "Kit de seringues",
      link: undefined,
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: 34.5,
    },
    {
      index: 3,
      title: "Lunette",
      link: undefined,
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: 59.99,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 m-4">
      {cards.map((card) => (
        <ShopCard card={card} key={card.index} />
      ))}
    </div>
  );
}

export default Shop;
