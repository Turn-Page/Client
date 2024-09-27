import { PiStarFill } from "react-icons/pi";

export const getStar = (num: number) => {
  num = Math.round(num);
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(
      <PiStarFill stroke="#5D5757" fill="#FF9E9E" strokeWidth={10} size={26} />
    );
  }

  for (let i = 0; i < 5 - num; i++) {
    stars.push(
      <PiStarFill stroke="#5D5757" fill="#fff" strokeWidth={10} size={26} />
    );
  }

  return stars;
};
