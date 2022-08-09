import React from "react";
import styled from "styled-components";
import PopUpButton from "./PopUpButton";

const PopUpContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

const PopUpBox = styled.div`
  width: 440px;
  height: 520px;
`;

const PopUpContents = styled.div`
  width: 400px;
  height: 480px;
  margin: 20px;
  border-radius: 15px;
  background: rgb(255, 255, 255);
`;

const PopUpButtonBox = styled.div`
  width: 100%;
  height: 100%;
`;

function PopUp(handleEditPopUp) {
  const { onClose } = handleEditPopUp;

  return (
    <PopUpContainer
      onClick={(event) => {
        onClose(false);
      }}
    >
      <PopUpBox>
        <PopUpContents>
          <PopUpButtonBox>
            <PopUpButton link="#" text="비밀번호 변경" />
            <PopUpButton link="#" text="QR코드" />
            <PopUpButton link="#" text="앱 및 웹사이트" />
            <PopUpButton link="#" text="알림" />
            <PopUpButton link="#" text="개인정보 및 보안" />
            <PopUpButton link="#" text="로그인 활동" />
            <PopUpButton link="#" text="Instagram에서 보낸 이메일" />
            <PopUpButton link="#" text="문제 신고" />
            <PopUpButton link="#" text="로그아웃" />
            <PopUpButton link="#" text="취소" />
          </PopUpButtonBox>
        </PopUpContents>
      </PopUpBox>
    </PopUpContainer>
  );
}

export default PopUp;
