import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Animate() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

}

export default Animate;
