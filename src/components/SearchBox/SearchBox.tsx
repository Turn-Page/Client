import { ReactNode } from "react";
import * as style from "./styles";

// children으로 input 태그를 넘겨주세요
const SearchBox = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<Element>;
}) => {
  return (
    <style.Search className={className}>
      {children}
      <style.SearchIcon onClick={onClick} />
    </style.Search>
  );
};

export default SearchBox;
