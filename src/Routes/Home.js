import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Story from "../components/Story";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
  margin: auto 0;
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <Story />
      </Wrapper>
    </Layout>
  );
}

export default Home;
