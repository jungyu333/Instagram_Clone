import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function PuschNotice() {
    return <div>
      <Layout>
        <Wrapper>
          <ProfileChangeContainer>
            <Option>
                <Link to = {"/ProfileChange"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 프로필 편집 </p>
                </Link>
                <Link to = {"/PasswordChange"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 비밀번호 변경 </p>
                </Link>
                <Link to = {"/Website"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 웹 및 앱사이트 </p>
                </Link>
                <Link to = {"/EmailSettings"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 이메일 알림 </p>
                </Link>
                <Link to = {"/PushNotice"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 푸시 알림 </p>
                </Link>
                <Link to = {"/ContactManagement"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 연락처 관리</p>
                </Link>
                <Link to = {"/Help"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 도움말 </p>
                </Link>
            </Option>
            <UserChange>
            <PushNoticeContainer>
            <CheckBoxWrapper>
              <CheckBox id="checkbox" type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
              </CheckBoxWrapper>
              <p style={{fontWeight: "bold"}}>푸시 알림</p>
              <p>모두 일시 중단</p>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> 게시물, 스토리 및 댓글 </p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> Reels</p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> 팔로잉 및 팔로워 </p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> Direct 메시지 및 통화 </p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> 라이브 방송 및 동영상 </p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> 기부 캠페인 </p>
              </Link>
              <Link to = {""} style={{ textDecoration: 'none', color: 'black'}}>
              <p> Instagram에서 보내는 알림 </p>
              </Link>

            </PushNoticeContainer>
            </UserChange>
          </ProfileChangeContainer>
          <Footer/>
        </Wrapper>
      </Layout>
    </div>
  };


  
  export default PuschNotice;

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

const Option= styled.div`
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

const UserChange= styled.div`
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
  

const CheckBoxWrapper = styled.div`
  position: absolute;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 62px;
  left: 590px;
  width: 45px;
  height: 27px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin: 2.7px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 45px;
  height: 27px;
  &:checked + ${CheckBoxLabel} {
    background: #50bcdf;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const PushNoticeContainer = styled.div`
  margin: -1px 0 0 -21px ;
  height: 800px;
  line-height: 330%;
  padding : 2px 0 0 27px;
`;

