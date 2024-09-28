import Slider from "react-slick";
import * as Style from "./styles";
import BestSellerPreview from "../BestSellerPreview/BestSellerPreview";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { apiGetBestSeller } from "../../../apis/bestseller/apiGetBestSeller";
import { IBestSeller } from "../../../apis/bestseller/types";

const BestSellerCarousel = () => {
  const { data: bestSellerData } = useQuery<IBestSeller[]>({
    queryKey: ["bestSeller", "home"],
    queryFn: () => apiGetBestSeller({ pageParam: 0, size: 50 }),
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Style.RightBracketIcon />,
    prevArrow: <Style.LeftBracketIcon />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="slider-container" style={{ margin: "50px 0" }}>
      <Slider {...settings}>
        {bestSellerData?.map((info) => (
          <BestSellerPreview key={info.bookId} bookInfo={info} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSellerCarousel;
