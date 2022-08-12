import { Carousel } from "react-daisyui";

function TrainingCarousel() {
  return (
    <Carousel
      className="mt-16 h-80 rounded-box bg-slate-700 "
      display="sequential"
    >
      <Carousel.Item
        src="https://images.pexels.com/photos/11801569/pexels-photo-11801569.jpeg"
        alt="reptil"
      />
      <Carousel.Item
        src="https://i.pinimg.com/originals/43/11/33/431133cb972b937a4a663b414a7e2b98.jpg"
        alt="reptil"
      />
      <Carousel.Item
        src="https://www.cinechronicle.com/wp-content/uploads/2021/07/alien.jpg"
        alt="alien"
      />
      <Carousel.Item
        src="https://images.midilibre.fr/api/v1/images/view/61951c913e45462f9a06d5a5/large/image.jpg?v=1"
        alt="reptil"
      />
      <Carousel.Item
        src="https://plumasatomicas.com/wp-content/uploads/2022/04/The-black-alien-Instagram-1280x720.jpg"
        alt="reptil"
      />
      <Carousel.Item
        src="https://images.pexels.com/photos/7180827/pexels-photo-7180827.jpeg"
        alt="alien"
      />
      <Carousel.Item
        src="https://iletaitunepub.fr/wp/wp-content/uploads/2022/07/Black-Alien-en-roue-libre-il-veut-passer-a-la-vitesse-superieure-en-samputant-un-membre.jpeg"
        alt="alien"
      />
      <Carousel.Item
        src="https://sfractus-images.cleo.media/unsafe/0x106:2048x1258/2000x0/images/Resident-Alien-4237.jpg"
        alt="alien"
      />
      <Carousel.Item
        src="http://storage.canalblog.com/41/95/1344545/116433023.jpg"
        alt="alien"
      />
    </Carousel>
  );
}

export default TrainingCarousel;
