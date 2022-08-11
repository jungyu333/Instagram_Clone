import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";
import Story from "../components/Story";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: min-content;
  padding: 10vh 0;
  margin: 0 auto;
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <Story />
        <SideMenu />
        {[1, 2, 3, 4].map((card) => (
          <Card key={card} />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Home;
