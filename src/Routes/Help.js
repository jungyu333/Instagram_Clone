import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 120vh;
  padding: 10vh 0;
  margin: 0 auto;
`;

const ProfileChangeContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 65%;
  position: relative;
  display: flex;
  border: 1px solid lightgray;
  height: 800px;
  background-color: #ffffff;
  line-height: 300%;
  border-radius: 4px;
`;

const Option = styled.div`
  padding: 3.5px 0px 2px 30px;
  margin: -1px;
  font-size: 16.5px;
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 800px;
  line-height: 310%;
`;

const UserChange = styled.div`
  padding: 0px 20px 0px 20px;
  margin: -1px;
  font-size: 16.5px;
  width: 75%;
  position: relative;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
  display: right;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
`;

const HelpContainer = styled.div`
  margin: 30px 0 0 13px;
  width: 87.5%;
  height: 800px;
  line-height: 210%;
  padding: 2px 0 0 27px;
`;

function Help() {
  return (
    <div>
      <Layout>
        <Wrapper>
          <ProfileChangeContainer>
            <Option>
              <Link
                to={"/ProfileChange"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 프로필 편집 </p>
              </Link>
              <Link
                to={"/PasswordChange"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 비밀번호 변경 </p>
              </Link>
              <Link
                to={"/Website"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 웹 및 앱사이트 </p>
              </Link>
              <Link
                to={"/EmailSettings"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 이메일 알림 </p>
              </Link>
              <Link
                to={"/PushNotice"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 푸시 알림 </p>
              </Link>
              <Link
                to={"/ContactManagement"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 연락처 관리 </p>
              </Link>
              <Link
                to={"/Help"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p> 도움말 </p>
              </Link>
            </Option>
            <UserChange>
              <HelpContainer>
                <p style={{ fontSize: "24px", height: "60px" }}>Help</p>
                <Link
                  to={""}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p> 고객센터 </p>
                </Link>
                <Link
                  to={""}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p> 개인정보 및 보안 도움말 </p>
                </Link>
                <Link
                  to={""}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p> 지원 요청 </p>
                </Link>
              </HelpContainer>
            </UserChange>
          </ProfileChangeContainer>
          <Footer />
        </Wrapper>
      </Layout>
    </div>
  );
}

export default Help;
