import React, { useEffect, useState } from "react";

// A floating button that appears after scrolling and scrolls smoothly to the top
const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls down 200px
      setVisible(window.scrollY > 200);
    };

    // Initial check in case page loads scrolled
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    right: 20,
    bottom: 24,
    height: 44,
    width: 44,
    borderRadius: 22,
    background: "var(--primary)",
    color: "#fff",
    border: "none",
    boxShadow: "var(--box-shadow)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    zIndex: 9999,
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    transition: "opacity 0.25s ease-in-out",
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
      style={buttonStyle}
    >
      ↑
    </button>
  );
};

export default BackToTop;
