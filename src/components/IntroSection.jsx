import { imagePlaceholders, introHighlights } from "../data/contentData";
import "../styles/intro.css";

function IntroSection() {
  return (
    <section className="intro section">
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Giới thiệu chủ đề</p>
          <h2>Tư duy hệ thống về độc lập dân tộc và chủ nghĩa xã hội</h2>
          <p>
            Trang học tập này giúp người học nắm chắc logic cốt lõi trong tư
            tưởng Hồ Chí Minh: độc lập dân tộc và chủ nghĩa xã hội là mối quan
            hệ biện chứng, thống nhất giữa mục tiêu trước mắt và mục tiêu lâu
            dài.
          </p>
        </div>

        <figure className="intro__image-frame">
          <img
            src={imagePlaceholders.intro.src}
            alt={imagePlaceholders.intro.alt}
            loading="lazy"
          />
          {/* <figcaption>
            Gợi ý thay ảnh: tư liệu lịch sử cách mạng, thư viện học thuật,
            hoặc hình minh họa chính luận.
          </figcaption> */}
        </figure>

        <div className="intro__grid">
          {introHighlights.map((item) => (
            <article className="intro__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
