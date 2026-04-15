import { applicationItems } from "../data/contentData";
import "../styles/application.css";

function ApplicationSection() {
  return (
    <section id="van-dung" className="section application">
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Phần IV - Vận dụng hiện nay</p>
          <h2>Định hướng vận dụng trong giai đoạn hiện nay</h2>
          <p>
            Tập trung vào yêu cầu kiên định mục tiêu, phát huy dân chủ, củng cố
            hệ thống chính trị và phòng chống suy thoái trong nội bộ.
          </p>
        </div>

        <div className="application__grid">
          {applicationItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="application__card">
                <div className="application__icon-wrap">
                  <Icon className="application__icon" />
                </div>
                <span className="badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ApplicationSection;
