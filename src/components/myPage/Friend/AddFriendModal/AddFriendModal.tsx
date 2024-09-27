import ReactModal, { setAppElement } from "react-modal";
import * as style from "./styles";
import { IoClose, IoPersonAddSharp } from "react-icons/io5";
import { apiPostFollow } from "../../../../apis/myPage/apiPostFollow";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../recoil/accessTokenState";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { IFollowList } from "../../../../apis/myPage/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

const AddFriendModal = ({
  modalToggle,
  setModalToggle,
  refetchFollowingList,
}: IAddFriendModalProps) => {
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    clearErrors();
    reset();
  }, [modalToggle]);

  const onValid = (data: { email: string }) => {
    apiPostFollow(accessToken as string, data.email)
      .then(() => {
        alert("팔로우에 성공하였습니다.");
        refetchFollowingList();
        setModalToggle(false);
      })
      .catch((err) => {
        alert(err.response?.data?.message);
        setModalToggle(false);
      });
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  return (
    <ReactModal
      isOpen={modalToggle}
      onRequestClose={() => setModalToggle(false)}
      style={modalStyle}
    >
      <style.Container>
        <IoClose
          size={20}
          onClick={() => setModalToggle(false)}
          style={{
            cursor: "pointer",
            color: "#aaa",
            position: "absolute",
            right: 14,
            top: 14,
          }}
        />
        <div className="row1">팔로우할 회원의 이메일을 입력해 주세요.</div>

        <div className="row2">
          <input
            {...register("email", {
              required: "* 팔로우할 친구의 이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "* 이메일 형식이 올바르지 않습니다.",
              },
            })}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(onValid)();
            }}
          />
          <IoPersonAddSharp
            size={30}
            style={{ cursor: "pointer" }}
            onClick={handleSubmit(onValid)}
          />
        </div>
        <div className="error-text">{errors?.email?.message}</div>
      </style.Container>
    </ReactModal>
  );
};

export default AddFriendModal;

interface IAddFriendModalProps {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  refetchFollowingList: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IFollowList, Error>>;
}

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    width: "400px",
    height: "140px",
    borderRadius: "25px",
    zIndex: "150",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
