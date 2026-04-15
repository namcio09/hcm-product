import { useMemo, useState } from "react";
import { mainContentTabs } from "../data/contentData";
import "../styles/content-tabs.css";

function ContentTabs() {
  const [activeTabId, setActiveTabId] = useState(mainContentTabs[0].id);

  const activeTab = useMemo(
    () => mainContentTabs.find((item) => item.id === activeTabId),
    [activeTabId]
  );

  return (
    <section id="noi-dung-chinh" className="section content-tabs">
      <div className="container" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">Phần III - Nội dung trọng tâm</p>
          <h2>Mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội</h2>
          <p>
            Chọn từng trục nội dung để theo dõi lập luận then chốt, kết hợp điểm
            nhấn và ý nghĩa cốt lõi cho việc ghi nhớ.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Nội dung chính">
          {mainContentTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              className={`tabs__btn ${activeTabId === tab.id ? "active" : ""}`}
              aria-selected={activeTabId === tab.id}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab && (
          <article className="tabs__panel" role="tabpanel">
            <div className="tabs__panel-head">
              <span className="badge">{activeTab.badge}</span>
              <h3>{activeTab.label}</h3>
            </div>
            <p className="core-meaning">
              <strong>Ý nghĩa cốt lõi:</strong> {activeTab.coreMeaning}
            </p>
            <ul>
              {activeTab.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </section>
  );
}

export default ContentTabs;
