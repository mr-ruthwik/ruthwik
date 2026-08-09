import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

/**
 * A button that plays a ~5-8s fake progress-fill animation, then
 * triggers a real file download. Mirrors startFakeDownload() from
 * the original script.js. Used for the resume button and the
 * project ZIP download buttons inside the execution guide modal.
 */
export default function DownloadButton({ url, filename, label, className = "" }) {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const intervalRef = useRef(null);

  // Clean up a running interval if the component unmounts mid-download.
  useEffect(() => () => clearInterval(intervalRef.current), []);

  const handleClick = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    const duration = Math.floor(Math.random() * 3000) + 5000; // 5s-8s
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(intervalRef.current);

        fetch(url)
          .then((res) => res.blob())
          .then((blob) => {
            const blobUrl = URL.createObjectURL(blob);
            const tempLink = document.createElement("a");
            tempLink.href = blobUrl;
            tempLink.download = filename || "download";
            document.body.appendChild(tempLink);
            tempLink.click();
            tempLink.remove();
            URL.revokeObjectURL(blobUrl);
          })
          .catch(() => {
            window.open(url, "_blank");
          });

        setProgress(0);
        setIsDownloading(false);
      }
    }, 100);
  };

  return (
    <button
      type="button"
      className={`${className}${isDownloading ? " is-downloading" : ""}`}
      onClick={handleClick}
    >
      <span className="btn-progress-fill" style={{ width: `${progress}%` }} />
      <Icon name="download" className="btn-icon-download" />
      <span className="btn-spinner"></span>
      <span className="btn-label">{isDownloading ? `${Math.floor(progress)}%` : label}</span>
    </button>
  );
}