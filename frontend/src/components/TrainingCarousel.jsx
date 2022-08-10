import { Carousel } from "react-daisyui";

function TrainingCarousel() {
  return (
    <Carousel className="rounded-box">
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
  );
}

export default TrainingCarousel;
