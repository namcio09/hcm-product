import { summaryNodes } from "../data/contentData";
import "../styles/summary-map.css";

function SummaryMap() {
  return (
    <section id="so-do" className="section summary-map">
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Sơ đồ tư duy</p>
          <h2>Chuỗi quan hệ logic cần ghi nhớ</h2>
          <p>
            Sơ đồ tóm tắt theo hướng từ tiền đề đến điều kiện bảo đảm và điều
            kiện thực thi trong thực tiễn.
          </p>
        </div>

        <div className="map-track" aria-label="Timeline tóm tắt kiến thức">
          {summaryNodes.map((node, index) => (
            <div className="map-node" key={node.id}>
              <div className="map-node__index">0{index + 1}</div>
              <h3>{node.title}</h3>
              <p>{node.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SummaryMap;
