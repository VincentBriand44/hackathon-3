import { Carousel } from "react-daisyui";

function TrainingCarousel() {
  return (
    <Carousel className="-z-1 rounded-box" display="sequential">
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
        alt="Car"
        className="z-0"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
        alt="Car"
        className="z-0"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
        alt="Car"
        className="z-0"
      />
      <Carousel.Item
        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
        alt="Car"
        className="z-0"
      />
    </Carousel>
  );
}

export default TrainingCarousel;
