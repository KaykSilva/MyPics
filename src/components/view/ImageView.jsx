import "./ImageView.css";
import { FaDownload } from "react-icons/fa";

function ImageView({ onViewer, showModal}) {
  return (

    <div className="viewer-container">
        
      <img src={onViewer} />

      <div className="download-btn">
        <button>
          <FaDownload size={50} color="#FFF" />
        </button>
      </div>
    </div>
  );
}

export default ImageView;
