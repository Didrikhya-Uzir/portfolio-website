import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie(props) {
  const animationData = props.animationData;

  return <Lottie animationData={animationData} loop autoplay />;
}
