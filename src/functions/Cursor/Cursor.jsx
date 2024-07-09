import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import twc from "../twc";

const Cursor = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [affected, setAffected] = useState(false);

  useEffect(() => {
    const getAllMouseAffectedElements =
      document.querySelectorAll(".mouse-affected");

    const cb_mousemove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", cb_mousemove);
    window.addEventListener("mousedown", () => setAffected(true));
    window.addEventListener("mouseup", () => setAffected(false));

    getAllMouseAffectedElements.forEach((e) =>
      e.addEventListener("mouseenter", () => setAffected(true))
    );
    getAllMouseAffectedElements.forEach((e) =>
      e.addEventListener("mouseleave", () => setAffected(false))
    );

    return () => {
      window.removeEventListener("mousemove", cb_mousemove);
      window.removeEventListener("mousedown", () => setAffected(true));
      window.removeEventListener("mouseup", () => setAffected(false));

      getAllMouseAffectedElements.forEach((e) =>
        e.removeEventListener("mouseenter", () => setAffected(true))
      );
      getAllMouseAffectedElements.forEach((e) =>
        e.removeEventListener("mouseleave", () => setAffected(false))
      );
    };
  }, []);


  return (
    <motion.div
      style={{
        zIndex: 100,
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        borderRadius: `${affected ? "50%" : twc.theme.borderRadius.md}`,
        width: `${affected ? 40 : 20}px`,
        backgroundColor: twc.theme.colors.secondary[2],
        aspectRatio: "1 / 1",
        border: "2px solid " + twc.theme.colors.primary[1],
        pointerEvents: "none",
        transition: "0.1s border-radius, 0.1s width",
      }}
    ></motion.div>
  );
};

export default Cursor;
