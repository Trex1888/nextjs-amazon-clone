import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="" alt="" />
        </div>
        <div>
          <img loading="lazy" src="" alt="" />
        </div>
        <div>
          <img loading="lazy" src="" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
//120
export default Banner;
