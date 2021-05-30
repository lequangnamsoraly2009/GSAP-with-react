import React, { useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
// import { Power1 } from "gsap/gsap-core";

function AnimationWithCondition() {
  let circle = useRef(null);

  const handleClickPlay = () => {
    TweenMax.to(circle, {
      duration: 4,
      x: 750,
      rotation: 360,
      ease: "none",
      paused: true,
    }).play();
  };

  const handleClickPause = () => {
    TweenMax.to(circle, {
      duration: 4,
      x: 750,
      rotation: 360,
      ease: "none",
      paused: true,
    }).pause();
  };
  const handleClickResume = () => {
    TweenMax.to(circle, {
      duration: 4,
      x: 750,
      rotation: 360,
      ease: "none",
      paused: true,
    }).resume();
  };
  const handleClickReverse = () => {
    TweenMax.to(circle, {
      duration: 4,
      x: 750,
      rotation: 360,
      ease: "none",
      paused: true,
    }).reverse();
  };
  const handleClickRestart = () => {
    TweenMax.to(circle, {
      duration: 4,
      x: 750,
      rotation: 360,
      ease: "none",
      paused: true,
    }).restart();
  };

  return (
    <AnimationWithConditionContainer>
      <Circle ref={(element) => (circle = element)}></Circle>
      <Button onClick={handleClickPlay}>Play</Button>
      <Button onClick={handleClickPause}>Pause</Button>
      <Button onClick={handleClickResume}>Resume</Button>
      <Button onClick={handleClickReverse}>Reverse</Button>
      <Button onClick={handleClickRestart}>Restart</Button>
    </AnimationWithConditionContainer>
  );
}

const AnimationWithConditionContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e18ae2;
  margin: 30px;
`;

const Button = styled.button``;

export default AnimationWithCondition;
