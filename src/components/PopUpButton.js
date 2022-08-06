import React from "react";
import styled from "styled-components";

/*
    원하는 링크로 이동할 수 있도록 link를 받는다

    
*/

const PopUpButtonContainer = styled.button`
  width: 400px;
  height: 48px;
  margin: 0;
  padding: 4px 8px;
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  &:first-of-type {
    border-top: none;
  }
  border-color: rgba(0, 0, 0, 0.15);
  border-width: 1px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 350;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;

function PopUpButton(props) {
  return (
    <PopUpButtonContainer
      onClick={(event) => {
        if (!(props.text === "취소")) event.stopPropagation();
      }}
    >
      {props.text}
    </PopUpButtonContainer>
  );
}

export default PopUpButton;
