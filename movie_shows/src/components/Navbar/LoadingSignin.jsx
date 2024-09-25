import React, { useEffect, useState } from "react";

const LoadingSignin = () => {
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setText("3 seconds loaded");
    }, 3000);
  }, []);
  return <div>{loader ? <img src="./loader.svg" /> : <h3>{text}</h3>}</div>;
};

export default LoadingSignin;
