import React from "react";
import styled from "styled-components";

const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2vh 0;

  & h1 {
    font-weight: 700;
  }

  & span {
    font-size: small;
    color: gray;
  }
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: gray;
  margin-right: 10px;
`;

function Friend() {
  return (
    <FriendContainer>
      <Image />
      <div>
        <h1>친구</h1>
        <span>메시지를 좋아합니다</span>
      </div>
    </FriendContainer>
  );
}

export default Friend;
