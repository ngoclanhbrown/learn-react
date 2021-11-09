const Pet = ({ id, name, animal, breed, location, images }) => {
  let imageUrl = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    imageUrl = images[0];
  }

  return (
    <a href={`/detail/${id}`} className="pet">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
