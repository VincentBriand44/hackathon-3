import ShopCard from "../components/ShopCard";

function Shop() {
  const cards = [
    {
      index: 0,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "10.00",
    },
    {
      index: 1,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "1.50",
    },
    {
      index: 2,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "34.50",
    },
    {
      index: 3,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "18.00",
    },
    {
      index: 4,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "8.50",
    },
    {
      index: 5,
      title: "Test",
      image: "https://api.lorem.space/image/shoes?w=400&h=225",
      price: "6.00",
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
