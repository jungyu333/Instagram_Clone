import React ,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
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
  display: right;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
`;


function PasswordChange() {
  const [userPastPassword, setUserPastPassword] = useState("");
  const [userNewPassWord, setUserNewPassWord] = useState("");
  const [userNewPassWordConfirm, setUserNewPassWordConfirm] = useState("");
  
    const handleNewPassWordChange = (e) => {
      setUserNewPassWord(e.target.value);
    };
    const handleNewPassWordConfirmChange = (e) => {
      setUserNewPassWordConfirm(e.target.value);
    };
    
    const handlePastPasswordChange = (e) => {
        setUserPastPassword(e.target.value);
    };
  
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
            <UserChangeContainer>
            <UserProfileBox>
                        <div><UserImg /></div>
                        <div style={{flexGrow: "1", lineHeight: "25px"}}>
                        <h2 style={{height: "22px", marginTop: "5px", fontSize: "25px"}}>Chankyu012</h2>
                        </div>
            </UserProfileBox>
             <ChangeDesc style={{height:"15px"}}></ChangeDesc>  
              <UserChangeBox>
                <UserChangeSubBox style={{height: "25px"}}>
                    <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>이전 비밀번호</label></ChangeClass>
                       <ChangeInputBox><ChangeInput 
                          value={userPastPassword}
                          onChange={handlePastPasswordChange}/>
                       </ChangeInputBox>
                </UserChangeSubBox>
                 <ChangeDesc style={{height:"15px"}}></ChangeDesc>  
                <UserChangeSubBox style={{height: "25px"}}>
                    <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>새 비밀번호</label></ChangeClass>
                       <ChangeInputBox><ChangeInput 
                          value={userNewPassWord}
                          onChange={handleNewPassWordChange}/>
                       </ChangeInputBox>
                </UserChangeSubBox>
                 <ChangeDesc style={{height:"15px"}}></ChangeDesc>   
                  <UserChangeSubBox style={{height: "25px"}}>
                    <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>새 비밀번호 확인</label></ChangeClass>
                       <ChangeInputBox><ChangeInput 
                          value={userNewPassWordConfirm}
                          onChange={handleNewPassWordConfirmChange}/>
                       </ChangeInputBox>
                </UserChangeSubBox>
                 <ChangeDesc style={{height:"35px"}}></ChangeDesc> 
                <UserChangeSubBox style={{height: "40px"}}>
                    <ChangeClass></ChangeClass>
                     <button style={{height: "32px", borderRadius: "4px", borderWidth: "0.5px", cursor: "pointer"}}>비밀번호 변경</button>
                </UserChangeSubBox>
                  <ChangeDesc style={{height:"15px"}}></ChangeDesc> 
                <UserChangeSubBox style={{height: "40px"}}>
                    <ChangeClass></ChangeClass>
                     <div style={{lineHeight: "0px"}}><ChangeImgButton>비밀번호를 잊으셨나요?</ChangeImgButton></div>
                </UserChangeSubBox>
              </UserChangeBox>
            </UserChangeContainer>            
            </UserChange>
          </ProfileChangeContainer>
          <Footer/>
        </Wrapper>
      </Layout>
    </div>
  };



const UserChangeContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    //border 1px solid #000;
`

  const UserProfileBox = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 32px;
    display: flex;
    //border 1px solid #000;
`

const UserImg = styled.div`
    width: 38px;
    height: 38px;
    
    margin-left: 90px;
    margin-right: 25px;
    border-radius: 50%;     
    background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
`

const ChangeImgButton = styled.button`
    padding: 0 0;
    border: none;
    background-color: rgba(0,0,0,0);
    font-size: 14px;
    font-weight: 700;
    color: #0095f6;
    cursor: pointer;
`

////////////
// 프로필 편집 Form

const UserChangeBox = styled.div`
    width: 100%;
    margin-top: 14px;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    //border 1px solid #000;
`

const UserChangeSubBox = styled.div`
    width: 100%; 
    margin-bottom: 13px;
    display: flex;
    //border: 1px solid #000;
`

const ChangeClass = styled.div`
    width: 130px;
    height: 100%;
    padding-right: 25px;
    padding-left: 0px;
    position: relative;
    text-align: right;
    font-weight: 550;
    
    //border: 1px solid #000;
`

const ChangeInputBox = styled.div`
    width: 355px;
    height: 100%;
    position: relative;
`

const ChangeInput = styled.input`
    width: 430px;
    height: 35px;
    padding: 0 10px;
    border-radius : 4px;
    position: absolute;
    top: -3px;
    border-width: 0.5px;
    
`

const ChangeDesc = styled.div`
    width: 280px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    
    //border: 1px solid #000;
`

  
  export default PasswordChange;