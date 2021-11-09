import { Link } from "react-router-dom";

const Pet = ({ id, name, animal, breed, location, images }) => {
  let imageUrl = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    imageUrl = images[0];
  }

  return (
    <Link to={`/detail/${id}`} className="pet">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
