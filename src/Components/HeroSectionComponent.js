import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "20% off on new season",
    description: "New Inspiration 2020",
    image: "/img/hero-banner-alt.jpg",
  },
  {
    title: "Discover our latest collection",
    description: "Trendy Arrivals",
    image: "/img/hero-banner.jpg",
  },
  {
    title: "Style that speaks",
    description: "Fashion Collection",
    image: "/img/hero-shop.jpg",
  },
];

const HeroSectionComponent = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero pb-3 bg-cover bg-center d-flex align-items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "500px",
              }}
            >
              <div className="container py-5">
                <div className="row px-4 px-lg-5">
                  <div className="col-lg-6">
                    <p className="text-muted small text-uppercase mb-2">
                      {slide.description}
                    </p>
                    <h1 className="h2 text-uppercase mb-3">{slide.title}</h1>
                    <a className="btn btn-dark" href="/shop">
                      Browse collections
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSectionComponent;
