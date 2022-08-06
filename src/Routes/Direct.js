import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Story from "../components/Story";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;
  margin: 0 auto;
`;

const Idbox = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 20%;
  height: 5%;
  border: 1px solid lightgray;
  background-color: white;
  line-height: 300%;
  border-radius: 4px;
  font-weight: bold;
`;

const Leftmessagebox = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  height: 70%;
  border: 1px solid lightgray;
  background-color: white;
  line-height: 300%;
  border-radius: 4px;
  float: left;
`;

const StoryCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: yellow;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: center;
  margin-top: 30px;
  margin-left: 30px;
`;

const StoryName = styled.div`
  line-height: center;
  text-align: center;
  margin-top: -10px;
  width: 60px;
  height: 10px;
  font-size: 12px;
  white-space: nowrap;
`;

const Rightmessagebox = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-left: 50;
  margin-right: auto;
  width: 40%;
  height: 70%;
  border: 1px solid lightgray;
  background-color: white;
  line-height: 300%;
  border-radius: 4px;
  float: left;
`;

function Direct() {
  return (
    <div>
      <Layout>
        <Wrapper>
          <Idbox>
            <span> @utae1102 </span>
          </Idbox>
          <Leftmessagebox>
            <div>
              <StoryCircle />
              <StoryName>친구1</StoryName>
            </div>

            <div>
              <StoryCircle />
              <StoryName>친구2</StoryName>
            </div>

            <div>
              <StoryCircle />
              <StoryName>친구3</StoryName>
            </div>

            <div>
              <StoryCircle />
              <StoryName>친구4</StoryName>
            </div>

            <div>
              <StoryCircle />
              <StoryName>친구5</StoryName>
            </div>
          </Leftmessagebox>
          <Rightmessagebox></Rightmessagebox>
        </Wrapper>
        <Story />
      </Layout>
    </div>
  );
}

export default Direct;
