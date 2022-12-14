import ShopCard from "../components/ShopCard";

function Shop() {
  const cards = [
    {
      index: 0,
      title: "Technique d'auto-défense",
      link: "training",
      image:
        " https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg",
      price: 149.99,
    },
    {
      index: 1,
      title: "Kit de combat",
      link: undefined,
      image:
        "https://images.pexels.com/photos/4874368/pexels-photo-4874368.jpeg",
      price: 1999.99,
    },
    {
      index: 2,
      title: "Kit de seringues",
      link: undefined,
      image:
        "https://images.pexels.com/photos/8923189/pexels-photo-8923189.jpeg",
      price: 34.5,
    },
    {
      index: 3,
      title: "Lunette",
      link: undefined,
      image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
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
