import { useEffect } from "react";
import Icon from "./Icon";
import DownloadButton from "./DownloadButton";
import { executionGuides } from "../data/portfolioData";

export default function GuideModal({ activeKey, onClose }) {
  const guide = activeKey ? executionGuides[activeKey] : null;

  // Lock page scroll while the modal is open (matches the original overlay behavior)
  useEffect(() => {
    document.body.style.overflow = guide ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [guide]);

  // Close on Escape
  useEffect(() => {
    if (!guide) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [guide, onClose]);

  if (!guide) return null;

  return (
    <div
      className="guide-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="guide-modal" role="dialog" aria-modal="true" aria-labelledby="guideTitle">
        <button type="button" className="guide-close" aria-label="Close" onClick={onClose}>
          <Icon name="x" />
        </button>

        <h3 className="guide-title" id="guideTitle">
          {guide.title}
        </h3>

        <ol className="guide-steps">
          {guide.steps.map((step, i) => (
            <li key={i}>
              <span>
                {step.download ? (
                  <>
                    {step.label}
                    <DownloadButton
                      url={step.download}
                      label="Download ZIP"
                      className="guide-download-btn"
                    />
                  </>
                ) : (
                  step.text
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
