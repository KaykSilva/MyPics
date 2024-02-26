import React, { useEffect, useState, useCallback } from "react";
import "./Home.css";
import NavBar from "../../components/navBar/NavBar";
import getManyImages from "../../services/api/getManyImages";
import ReloadButton from "../../components/buttons/reload/ReloadButton";
import ImageView from "../../components/view/ImageView";

export const Home = () => {
  const [image, setImage] = useState([]);
  const [viewer, setViewer] = useState();
  const [showModal, setShowModal] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5); // Tempo em segundos

  const fetchData = useCallback(async () => {
    try {
      const response = await getManyImages();
      setImage(response);
    } catch (err) {
      console.error("Erro ao buscar as imagens", err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = (url) => {
    setViewer(url);
    setShowModal(true);

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      handleCloseModal();
    }, 5000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeRemaining(5);
  };

  return (
    <div className="container">
      <div className="navbar">
        <NavBar />
      </div>

      <div className="home-content">
        <div className="display-images">
          {image.map((url, index) => (
            <img src={url} key={index} onClick={() => handleClick(url)} />
          ))}
        </div>
      </div>

      {showModal && (
        <div className="image-view" onClick={handleCloseModal}>
          <ImageView onViewer={viewer} />
        </div>
      )}

      <ReloadButton onReload={fetchData} />
    </div>
  );
};

export default Home;
