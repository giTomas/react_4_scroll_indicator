import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  height: 500vh;
  ${'' /* background-color: #fdf0df; */}
  ${'' /* background-image: linear-gradient(to right bottom, #dffbfd, #f6bc70); */}
  ${'' /* background-image: repeating-linear-gradient(to bottom, #dffbfd 5%, #f6bc70 10%); */}
  ${'' /* background-image: repeating-linear-gradient( #f9f9f9, #f9f9f9 20px, #cccccc 21px); */}
  background-image: repeating-linear-gradient(#11e5f3, #11e5f3 2em, #ccf9fc 2em, #ccf9fc 4em);
`;
// #11e5f3

const Container = styled.div`
  --font-size: 2em;
`;

const InfoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255,255,255,0.95);
  ${'' /* background-color: white; */}
  min-width: 60%;
  padding: var(--vertical-rhytm);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
  @media(max-width: 650px) {
    min-width: 90%;
  }
`;

const ScrollIndicatorContainer = styled.div`

`;

const ScrollIndicator = styled.div.attrs({
  // width: props => props.progress || 0,
  scale: props => (props.progress / 100 ) || 0,
})`
  ${'' /* width: ${props => props.width}%; */}
  ${'' /* color:font-size: var(--font-size); */}
  background-color: #f31174;
  height: 1em;
  transform: scaleX(${props => props.scale});
  transform-origin: left;
  ${'' /* transition: width 10 linear; */}
`;

const ScrollIndicatorDescription = styled.h2`
  font-size: 2em;
  color: #f31174;
  font-weight: 200;
  ${'' /* line-height: var(--line-height); */}
  margin-bottom: calc(var(--vertical-rhytm)/2);
`;

const Page = ({progress, parentRef}) => (
  <Wrapper innerRef={parentRef}>
    <InfoContainer>
      <ScrollIndicatorDescription>Scroll progress: {progress}%</ScrollIndicatorDescription>
      <ScrollIndicator progress={progress}/>
    </InfoContainer>
  </Wrapper>
);

export default Page;
