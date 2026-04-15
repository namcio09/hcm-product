import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../data/contentData";
import "../styles/navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <button
          className="brand"
          onClick={() => handleScrollToSection("trang-chu")}
          type="button"
        >
          <span className="brand__line" />
          <span>Tư tưởng Hồ Chí Minh</span>
        </button>

        <nav className={`navbar__menu ${isMobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="navbar__link"
              onClick={() => handleScrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Mở menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
