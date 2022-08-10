import { Carousel } from "react-daisyui";

function Training() {
  const valid = true;

  if (valid) {
    return (
      <>
        <h1 className="font-bold text-center">Formation de Combat</h1>
        <Carousel className="rounded-box" display="sequential">
          <Carousel.Item
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            alt="Car"
          />
          <Carousel.Item
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            alt="Car"
          />
          <Carousel.Item
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            alt="Car"
          />
          <Carousel.Item
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            alt="Car"
          />
        </Carousel>
      </>
    );
  }
  return (
    <div>
      <h1 className="font-bold text-center">Formation de Combat</h1>
      <p>Vous n'avez pas accès à cette page.</p>
    </div>
  );
}

export default Training;
