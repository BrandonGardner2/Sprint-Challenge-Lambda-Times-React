import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames
// You can find the corresponding CSS in the CSS/index.css file

const TopBarComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;

@media (min-width: 1280px) {
    width: 1280px;
`;

const TBContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TBContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const TBContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TBContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
`;

const TBContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TBContainerRightSpan = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarComponent>
      <TopBarContainer>
        <TBContainerLeft>
          <TBContainerLeftSpan>TOPICS</TBContainerLeftSpan>
          <TBContainerLeftSpan>SEARCH</TBContainerLeftSpan>
        </TBContainerLeft>
        <TBContainerCenter>
          <TBContainerCenterSpan>GENERAL</TBContainerCenterSpan>
          <TBContainerCenterSpan>BROWNBAG</TBContainerCenterSpan>
          <TBContainerCenterSpan>RANDOM</TBContainerCenterSpan>
          <TBContainerCenterSpan>MUSIC</TBContainerCenterSpan>
          <TBContainerCenterSpan>ANNOUNCEMENTS</TBContainerCenterSpan>
        </TBContainerCenter>
        <TBContainerRight>
          <TBContainerRightSpan>LOG IN</TBContainerRightSpan>
        </TBContainerRight>
      </TopBarContainer>
    </TopBarComponent>
  );
};

export default TopBar;
