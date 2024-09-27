import { ISearchBookAladin } from "../../apis/aladinOpenAPI/types";

export interface ISearchBookModalProps {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBook: React.Dispatch<
    React.SetStateAction<ISearchBookAladin | undefined>
  >;
}
