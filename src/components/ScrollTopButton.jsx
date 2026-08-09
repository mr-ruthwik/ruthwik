import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`scroll-top${visible ? " visible" : ""}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <Icon name="chevron-up" />
    </button>
  );
}
