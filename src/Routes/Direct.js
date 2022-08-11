import React from "react";
import styled from "styled-components";
import Friend from "../components/Friend";
import Layout from "../components/Layout";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 8vh 0;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 50%;
  height: 90vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
`;

const FriendListContainer = styled.div`
  width: 40%;
  border: 1px solid lightgray;
  border-top: none;
`;

const MessageContainer = styled.div`
  width: 60%;
  border: 1px solid lightgray;
  border-left: none;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 20px 0;

  border-left: none;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  height: 5%;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  & svg {
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 2px;
  }
`;

const EditIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 1vw;
  cursor: pointer;
`;

const FriendList = styled.div`
  padding: 0 1vw;

  height: 90%;
`;

const Message = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & svg {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  & button {
    background-color: #0095f6;
    border: none;
    padding: 8px 10px;
    border-radius: 4px;
    color: white;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  & span {
    font-size: 16px;
    color: gray;
    margin-bottom: 20px;
  }
`;

function Direct() {
  return (
    <div>
      <Layout>
        <Wrapper>
          <Container>
            <FriendListContainer>
              <NameContainer>
                <Name>
                  jungyu_333
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </Name>
                <EditIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
                </EditIcon>
              </NameContainer>

              <FriendList>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <Friend key={index} />
                ))}
              </FriendList>
            </FriendListContainer>
            <MessageContainer>
              <Message>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
                </svg>
                <TextContainer>
                  <h1>내 메시지</h1>
                  <span>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</span>
                </TextContainer>
                <button>메시지 보내기</button>
              </Message>
            </MessageContainer>
          </Container>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default Direct;
