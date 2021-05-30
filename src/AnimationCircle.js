import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power1 } from "gsap";
import styled from "styled-components";
import { Power4 } from "gsap/gsap-core";
import { Power2 } from "gsap/gsap-core";

function AnimationCircle() {
  const [state,setState] = useState(false);

  let circleRed = useRef(null);
  let circleGreen = useRef(null);
  let circleBlue = useRef(null);
  let text = useRef(null);

  const handleClickZoomOut = () => {
    TweenMax.to(circleGreen, 2, {
      width: 100,
      height: 100,
      ease: Power1.easeOut,
    });
    setState(true);
  };

  const handleClickZoomIn = () => {
    TweenMax.to(circleGreen, 2, {
      width: 50,
      height: 50,
      ease: Power1.easeOut,
    });
    setState(false);
  };

  const handleClickZoom1 = () => {
    TweenMax.to(circleBlue, 2, {
      rotation: 27,
      x: [100],
      duration: 1,
      ease: "bounce",
      repeat: 7,
      yoyo: true,
      reserved: true,
    });
  };

  const handleClickText = () => {
    TweenMax.to(text, 0.5, { scale: 0.5, ease: Power2.easeOut });
  };

  useEffect(() => {
    TweenMax.from(circleRed, 1, {
      opacity: 0,
      y: 40,
      ease: Power1.easeInOut,
      delay: 0.1,
    });
    TweenMax.from(circleGreen, 1.5, {
      opacity: 0,
      y: 40,
      ease: Power1.easeInOut,
      delay: 0.5,
    });
    TweenMax.from(circleBlue, 2, {
      opacity: 0,
      y: 40,
      ease: Power1.easeInOut,
      delay: 1,
    });
    //Có thể viết gọn lại nếu các thuộc tính giống nhau
    // TweenMax.staggerFrom([circleRed,circleGreen,circleBlue],0.5,{opacity:0,y:-40,ease:Power1.easeInOut},0.4);
    TweenMax.from(text, 2.5, {
      opacity: 0,
      x: -40,
      ease: Power4.easeInOut,
      delay: 1.2,
    });
  }, []);

  return (
    <AnimationCircleContainer>
      <h1>1.Test Animation TweenMax and Power3</h1>
      <Circle ref={(element) => (circleRed = element)}></Circle>
      <Circle
        ref={(element) => (circleGreen = element)}
        backgroundColor="green"
        onClick={state !== true ? handleClickZoomOut : handleClickZoomIn}
      ></Circle>
      <Circle
        ref={(element) => (circleBlue = element)}
        backgroundColor="blue"
        onClick={handleClickZoom1}
      ></Circle>

      <Text ref={(element) => (text = element)} onClick={handleClickText}>
        <span>Thử 1 đoạn text dài dài xem như nào</span>
      </Text>
    </AnimationCircleContainer>
  );
}

const AnimationCircleContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "red"};
  margin: 30px;
`;

const Text = styled.div`
    margin-top: 50px;
  height: 100px;
`;

export default AnimationCircle;
