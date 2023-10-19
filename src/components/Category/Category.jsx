import CategoryCard from "./categoryCard";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Category = ({ categorys }) => {
  const images = categorys[0].slider;
  const imagess = categorys[1].slider;
  const imagesss = categorys[2].slider;

  return (
    <div className="py-10">
      {/* Slider start */}

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={images} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imagess} alt="" /></SwiperSlide>
      <SwiperSlide><img src={imagesss} alt="" /></SwiperSlide>
      
      
    </Swiper>

      {/* Slider end */}
      <h2 className="flex justify-center items-center font-extrabold">
        All Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categorys?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
