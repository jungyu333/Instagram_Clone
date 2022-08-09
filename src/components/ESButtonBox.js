import React, { useState } from "react";
import styled from "styled-components";

const ESButtonStatus = {
  ON: "on",
  OFF: "off",
};

const ESButtonBoxContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
`;

const ESButtonName = styled.span`
  height: 20px;
  //flex-grow: 1;
  font-weight: 600;
  font-size: 16px;
  //border: 1px solid;
`;

const ESRadioButton = styled.div`
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  cursor: pointer;
  //border: 1px solid;
`;
const ESEnableCircle = styled.div`
  width: 8px;
  height: 8px;
  border: 8px solid #0095f6;
  border-radius: 50%;
`;
const ESDisableCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 8px solid #fff;
  background-color: #fff;
  box-shadow: 0.8px 0.8px 1px 1.5px #cccccc;
`;

const ESButtonDescription = styled.span`
  display: inline-block;
  height: 16px;
  font-size: 12px;
  color: rgb(142, 142, 142);
  //border: 1px solid;
`;

function ESButtonBox(prop) {
  const { name, desc, isOn } = prop.buttonInfo;

  const [buttonStatus, setButtonStatus] = useState(isOn);

  const EnableCircle = (
    <div style={{ paddingRight: "8px" }}>
      <ESEnableCircle />
    </div>
  );
  const DisableCircle = (
    <div style={{ paddingRight: "8px" }}>
      <ESDisableCircle />
    </div>
  );

  const handleButtonToOff = () => {
    setButtonStatus(ESButtonStatus.OFF);
  };

  const handleButtonToOn = () => {
    setButtonStatus(ESButtonStatus.ON);
  };

  return (
    <ESButtonBoxContainer>
      {/* Name */}
      <div style={{ height: "30px", lineHeight: "40px", padding: "10px 0px" }}>
        <ESButtonName>{name}</ESButtonName>
      </div>
      {/* Buttons */}
      <div style={{ paddingLeft: "12px" }}>
        <ESRadioButton
          onClick={handleButtonToOff}
          data-buttontype={ESButtonStatus.OFF}
        >
          {buttonStatus === ESButtonStatus.OFF ? EnableCircle : DisableCircle}
          <div style={{ flexGrow: "1", lineHeight: "25px" }}>
            <span style={{ fontSize: "14px" }}>해제</span>
          </div>
        </ESRadioButton>
      </div>
      <div style={{ paddingLeft: "12px" }}>
        <ESRadioButton
          onClick={handleButtonToOn}
          data-buttontype={ESButtonStatus.ON}
        >
          {buttonStatus === ESButtonStatus.ON ? EnableCircle : DisableCircle}
          <div style={{ flexGrow: "1", lineHeight: "25px" }}>
            <span style={{ fontSize: "14px" }}>설정</span>
          </div>
        </ESRadioButton>
      </div>

      {/* Description */}
      <div style={{ height: "25px", lineHeight: "13px" }}>
        <ESButtonDescription>{desc}</ESButtonDescription>
      </div>
    </ESButtonBoxContainer>
  );
}

export default ESButtonBox;
