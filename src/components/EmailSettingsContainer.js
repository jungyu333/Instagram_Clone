import React from "react";
import styled from "styled-components";
import ESButtonBox from "./ESButtonBox";

const EmailSettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const ESButtonBoxContainer = styled.div`
  width: 90%;
  height: 750px;
  margin: 13px 5px 15px 20px;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

function EmailSettingsContainer() {
  const buttonInfoArray = [
    {
      name: "의견 이메일",
      desc: "Instagram에서 의견을 보내보세요.",
      isOn: "on",
    },
    {
      name: "알림 이메일",
      desc: "확인하지 않은 알림을 받아보세요.",
      isOn: "off",
    },
    {
      name: "제품 이메일",
      desc: "Instagram 도구에 관한 팁을 확인해보세요.",
      isOn: "on",
    },
    {
      name: "뉴스 이메일",
      desc: "Instagram의 새로운 기능에 대해 자세히 알아보세요.",
      isOn: "off",
    },
    {
      name: "지원 이메일",
      desc: "커뮤니티 가이드라인의 신고 및 위반에 관한 업데이트를 받습니다.",
      isOn: "on",
    },
  ];


  return (
    <EmailSettingsWrapper>
      <ESButtonBoxContainer>
        <ESButtonBox buttonInfo={buttonInfoArray[0]} />
        <ESButtonBox buttonInfo={buttonInfoArray[1]} />
        <ESButtonBox buttonInfo={buttonInfoArray[2]} />
        <ESButtonBox buttonInfo={buttonInfoArray[3]} />
        <ESButtonBox buttonInfo={buttonInfoArray[4]} />
      </ESButtonBoxContainer>
    </EmailSettingsWrapper>
  );
}

export default EmailSettingsContainer;

