import React from "react";
import { useState, useEffect } from "react";

export default function ChangeSrc(props) {
  const { mobile, desktop, alt, classname } = props;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [imageSrc, setImageSrc] = useState(mobile);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200) {
        setIsSmallScreen(true);
        setImageSrc(mobile);
      } else {
        setIsSmallScreen(false);
        setImageSrc(desktop);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktop, mobile]);
  return <img src={imageSrc} alt={alt} className={classname} />;
}
