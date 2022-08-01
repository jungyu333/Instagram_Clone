import React from "react";
import styled from "styled-components";


const SideWrapper = styled.div`
    
    width:30%;
    float:right;
    position:absolute;
    top:70px;
    right:230px;
    height:60vh;
`;

const ProfileWrapper = styled.div`
    width: 100%;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
        color:blue;
    }
    
    
`;

const Myprofile = styled.div`
    display:flex;
    padding:5px;
    align-items:center;
`;

const ProfileImage = styled.div`
    background-color: yellow;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: center;

`;

const ProfileName = styled.div`
    padding:10px 10px 10px 30px;
    span{
        &:first-child{
            color:black;

        }
        
        &:last-child{
            color:gray;

        }
    }
`;

const RecommendWrapper = styled.div`
    width: 100%;
    
    background-color: white;
    
`;

const RecommendHeader = styled.div`
    padding:10px;
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    span{
    &:first-child{
        color:darkgray;
        font-size:1.2rem;
    }
    
    &:last-child{
        color:black;
        font-weight:bold;
    }
}
`;

const RecommendProfileWrapper = styled(ProfileWrapper)`
    width:100%;
    
    padding:5px;
    
    span{
        color:blue;
        padding-right:40px;
    }
`;

const RecommendProfile = styled(Myprofile)`

`;

const RecommendProfileImage = styled(ProfileImage)`
    width:40px;
    height:40px;
`;

const RecommendProfileName = styled(ProfileName)`
height:30px;
span{
    &:first-child{
        color:black;
        font-size:1rem;
    }
    
    &:last-child{
        color:gray;
        font-size:0.8rem;
    }
}
`;


const Footer = styled.div`
    font-size:0.9rem;
    color:gray;
`;

const FooterMenu = styled.div`
    div{
        display:inline-block;
    }
    padding:20px;
    padding-left:0;
`;

const FooterInfo = styled.div`

`;





function SideMenu() {
    return (
        <SideWrapper>
            <ProfileWrapper>
                <Myprofile>
                    <ProfileImage>
                    </ProfileImage>
                    <ProfileName>
                        <span>myIntroduce2</span><br />
                        <span>myIntroduce2</span>
                    </ProfileName>
                </Myprofile>
                <span>전환</span>
            </ProfileWrapper>
            <RecommendWrapper>
                <RecommendHeader>
                    <span>회원님을 위한 추천</span>
                    <span>모두 보기</span>
                </RecommendHeader>
                <div>
                    <RecommendProfileWrapper>
                        <RecommendProfile>
                            <RecommendProfileImage />
                            <RecommendProfileName>
                                <span>myIntroduce2</span><br />
                                <span>myIntroduce2</span>
                            </RecommendProfileName>
                        </RecommendProfile>
                        <span>팔로우</span>
                    </RecommendProfileWrapper>
                </div>
                <div>
                    <RecommendProfileWrapper>
                        <RecommendProfile>
                            <RecommendProfileImage />
                            <RecommendProfileName>
                                <span>myIntroduce2</span><br />
                                <span>myIntroduce2</span>
                            </RecommendProfileName>
                        </RecommendProfile>
                        <span>팔로우</span>
                    </RecommendProfileWrapper>
                </div>
                <div>
                    <RecommendProfileWrapper>
                        <RecommendProfile>
                            <RecommendProfileImage />
                            <RecommendProfileName>
                                <span>myIntroduce2</span><br />
                                <span>myIntroduce2</span>
                            </RecommendProfileName>
                        </RecommendProfile>
                        <span>팔로우</span>
                    </RecommendProfileWrapper>
                </div>
                <div>
                    <RecommendProfileWrapper>
                        <RecommendProfile>
                            <RecommendProfileImage />
                            <RecommendProfileName>
                                <span>myIntroduce2</span><br />
                                <span>myIntroduce2</span>
                            </RecommendProfileName>
                        </RecommendProfile>
                        <span>팔로우</span>
                    </RecommendProfileWrapper>
                </div>
                <div>
                    <RecommendProfileWrapper>
                        <RecommendProfile>
                            <RecommendProfileImage />
                            <RecommendProfileName>
                                <span>myIntroduce2</span><br />
                                <span>myIntroduce2</span>
                            </RecommendProfileName>
                        </RecommendProfile>
                        <span>팔로우</span>
                    </RecommendProfileWrapper>
                </div>
            </RecommendWrapper>

            <Footer>
                <FooterMenu>
                    <div>소개</div><span> ˙ </span> 
                    <div>도움말</div><span> ˙ </span> 
                    <div>홍보 센터</div><span> ˙ </span> 
                    <div>API</div><span> ˙ </span> 
                    <div>채용정보</div><span> ˙ </span>  <br />
                    <div>개인정보처리방침</div><span> ˙ </span> 
                    <div>약관</div><span> ˙ </span> 
                    <div>위치</div><span> ˙ </span> 
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
