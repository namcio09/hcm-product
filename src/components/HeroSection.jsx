import { heroData, imagePlaceholders } from "../data/contentData";
import "../styles/hero.css";

function HeroSection() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="trang-chu" className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content" data-reveal>
        <div className="hero__text">
          <p className="hero__tag">Landing page học tập</p>
          <h1>{heroData.title}</h1>
          <p className="hero__subtitle">{heroData.subtitle}</p>
          <div className="hero__actions">
            <button type="button" onClick={() => scrollTo("noi-dung-chinh")}>
              Khám phá nội dung
            </button>
            <button
              type="button"
              className="ghost"
              onClick={() => scrollTo("game")}
            >
              Thử trò chơi
            </button>
          </div>
        </div>

        <figure className="hero__visual">
          <img
            src={imagePlaceholders.hero.src}
            alt={imagePlaceholders.hero.alt}
            loading="lazy"
          />
          {/* <figcaption>
            Khung ảnh gợi ý - bạn có thể thay bằng ảnh tư liệu lịch sử, sách,
            hoặc hình minh họa học thuật.
          </figcaption> */}
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
