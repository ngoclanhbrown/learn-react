import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import Carousel from "./Carousel";

const Detail = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({});
  const [themeColor] = useContext(ThemeContext);

  useEffect(() => {
    fetchInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchInfo() {
    setLoading(true);
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${params.id}`
    );
    const json = await res.json();
    setInfo(json.pets[0]);
    setLoading(false);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  function adopt() {
    window.location = "https://google.com";
  }

  return (
    <div className="details">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Carousel images={info.images} />
          <h1>{info.name}</h1>
          <h2>
            {info.animal} - {info.breed} - {info.city}, {info.state}
          </h2>
          <button
            style={{
              backgroundColor: themeColor,
            }}
            onClick={toggleModal}
          >
            Adopt {info.name}
          </button>
          <p>{info.description}</p>
          {showModal && (
            <Modal>
              <h1>Would you like to adopt {info.name}?</h1>
              <div className="buttons">
                <button onClick={adopt} style={{ backgroundColor: themeColor }}>
                  Yes
                </button>
                <button
                  onClick={toggleModal}
                  style={{ backgroundColor: themeColor }}
                >
                  No
                </button>
              </div>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
