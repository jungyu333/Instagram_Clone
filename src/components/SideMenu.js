import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideWrapper = styled.div`
  width: 30%;
  float: right;
  position: absolute;
  top: 70px;
  right: 230px;
  height: 60vh;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 10 0 10 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: blue;
  }
`;

const Myprofile = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`;

const ProfileImage = styled.div`
  background-color: yellow;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: center;
  cursor: pointer;
`;

const ProfileName = styled.div`
  padding: 10px 10px 10px 30px;
  span {
    &:first-child {
      color: black;
    }

    &:last-child {
      color: gray;
      cursor: text;
    }
  }
`;

const RecommendWrapper = styled.div`
  width: 100%;
`;

const RecommendHeader = styled.div`
  padding: 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    &:first-child {
      color: darkgray;
      font-size: 1.2rem;
    }

    &:last-child {
      color: black;
      font-weight: bold;
    }
  }
`;

const RecommendProfileWrapper = styled(ProfileWrapper)`
  width: 100%;

  padding: 5px;

  span {
    color: blue;
    padding-right: 40px;
    cursor: pointer;
  }
`;

const RecommendProfile = styled(Myprofile)`
  cursor: text;
`;

const RecommendProfileImage = styled(ProfileImage)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const RecommendProfileName = styled(ProfileName)`
  height: 30px;

  Link {
    text-decoration: none;
  }
  span {
    &:first-child {
      color: black;
      font-size: 1rem;
      cursor: pointer;
    }

    &:last-child {
      color: gray;
      font-size: 0.8rem;
      cursor: text;
    }
  }
`;

const Footer = styled.div`
  font-size: 0.9rem;
  color: gray;

  a {
    text-decoration: none;
    color: gray;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterMenu = styled.div`
  div {
    display: inline-block;
  }
  padding: 20px;
  padding-left: 0;
  cursor: pointer;
`;

const FooterInfo = styled.div``;

function SideMenu() {
  const handleFollow = (event) => {
    event.currentTarget.innerText === "팔로우"
      ? (event.currentTarget.style.color = "black")
      : (event.currentTarget.style.color = "blue");
    event.currentTarget.innerText === "팔로잉"
      ? (event.currentTarget.innerText = "팔로우")
      : (event.currentTarget.innerText = "팔로잉");
  };
  return (
    <SideWrapper>
      <ProfileWrapper>
        <Myprofile>
          <ProfileImage></ProfileImage>
          <ProfileName>
            <Link to={"/profile"} style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }}>my ID</span>
              <br />
              <span>강대훈</span>
            </Link>
          </ProfileName>
        </Myprofile>
        <span style={{ cursor: "pointer" }}>전환</span>
      </ProfileWrapper>
      <RecommendWrapper>
        <RecommendHeader>
          <span>회원님을 위한 추천</span>
          <span style={{ cursor: "pointer" }}>모두 보기</span>
        </RecommendHeader>
        <div>
          <RecommendProfileWrapper>
            <RecommendProfile>
              <RecommendProfileImage />
              <RecommendProfileName>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <span>friend1</span>

                  <br />
                  <span>andasdf님이 팔로우합니다.</span>
                </Link>
              </RecommendProfileName>
            </RecommendProfile>
            <span onClick={handleFollow}>팔로우</span>
          </RecommendProfileWrapper>
        </div>
        <div>
          <RecommendProfileWrapper>
            <RecommendProfile>
              <RecommendProfileImage />
              <RecommendProfileName>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <span>friend2</span>

                  <br />
                  <span>andasdf님이 팔로우합니다.</span>
                </Link>
              </RecommendProfileName>
            </RecommendProfile>
            <span onClick={handleFollow}>팔로우</span>
          </RecommendProfileWrapper>
        </div>
        <div>
          <RecommendProfileWrapper>
            <RecommendProfile>
              <RecommendProfileImage />
              <RecommendProfileName>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <span>friend3</span>

                  <br />
                  <span>andasdf님이 팔로우합니다.</span>
                </Link>
              </RecommendProfileName>
            </RecommendProfile>
            <span onClick={handleFollow}>팔로우</span>
          </RecommendProfileWrapper>
        </div>
        <div>
          <RecommendProfileWrapper>
            <RecommendProfile>
              <RecommendProfileImage />
              <RecommendProfileName>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <span>friend4</span>

                  <br />
                  <span>andasdf님이 팔로우합니다.</span>
                </Link>
              </RecommendProfileName>
            </RecommendProfile>
            <span onClick={handleFollow}>팔로우</span>
          </RecommendProfileWrapper>
        </div>
        <div>
          <RecommendProfileWrapper>
            <RecommendProfile>
              <RecommendProfileImage />
              <RecommendProfileName>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <span>friend5</span>

                  <br />
                  <span>andasdf님이 팔로우합니다.</span>
                </Link>
              </RecommendProfileName>
            </RecommendProfile>
            <span onClick={handleFollow}>팔로우</span>
          </RecommendProfileWrapper>
        </div>
      </RecommendWrapper>

      <Footer>
        <FooterMenu>
          <div>
            <a href="https://about.instagram.com/">소개</a>
          </div>
          <span> ˙ </span>
          <a href="https://help.instagram.com/">도움말</a>
          <span> ˙ </span>
          <a href="https://about.instagram.com/blog">홍보센터</a>
          <span> ˙ </span>
          <a href="https://developers.facebook.com/docs/instagram">API</a>
          <span> ˙ </span>
          <a href="https://about.instagram.com/about-us/careers">채용정보</a>
          <span> ˙ </span> <br />
          <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">
            개인정보처리방침
          </a>
          <span> ˙ </span>
          <a href="https://help.instagram.com/581066165581870">약관</a>
          <span> ˙ </span>
          <a href="https://www.instagram.com/explore/locations/">위치</a>
          <span> ˙ </span>
          <div>언어</div>
        </FooterMenu>
        <FooterInfo>
          <span>© 2022 INSTAGRAM FROM META</span>
        </FooterInfo>
      </Footer>
    </SideWrapper>
  );
}

export default SideMenu;
