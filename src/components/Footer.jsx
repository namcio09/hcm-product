import { navItems } from "../data/contentData";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <section className="footer__brand">
          <p className="footer__eyebrow">Tư tưởng Hồ Chí Minh</p>
          <h3>Không gian học tập chính trị - triết học hiện đại</h3>
          <p>
            Nhấn mạnh mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa
            xã hội, giúp người học tiếp cận nội dung theo mạch logic, dễ ôn tập
            và vận dụng.
          </p>
        </section>

        <section className="footer__links">
          <h4>Điều hướng nhanh</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer__meta">
          <h4>Ghi chú học tập</h4>
          <ul>
            <li>Phần III: Mối quan hệ nền tảng giữa mục tiêu dân tộc và xã hội.</li>
            <li>Phần IV: Định hướng vận dụng trong bối cảnh hiện nay.</li>
            <li>
              Mini game: Tăng ghi nhớ khái niệm cốt lõi qua checkpoint trắc
              nghiệm.
            </li>
          </ul>
        </section>
      </div>

      <div className="container footer__bottom">
        <p>Landing page học tập - Chủ đề Tư tưởng Hồ Chí Minh</p>
        <small>
          © {currentYear} | Thiết kế theo phong cách học thuật trang trọng.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
