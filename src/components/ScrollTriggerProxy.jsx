/** @format */

// To use gsap with locomotive scroll, we have to use scroller proxy provided by gsap

import gsap from "gsap"; 
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const ScrollTriggerProxy = () => {
  // first let's get instance of locomotive Scroll

  const { scroll } = useLocomotiveScroll();
  //Register Scroll trigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on("scroll", ScrollTrigger.update);

      //lets use scroller proxy
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform
          ? "transform"
          : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
