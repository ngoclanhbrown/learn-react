import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(event) {
    const index = Number.parseInt(event.target.dataset.index);
    this.setState({
      active: index,
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              className={index === active ? "active" : ""}
              key={image}
              src={image}
              data-index={index}
              onClick={this.handleIndexClick}
              alt=""
            />
          ))}
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
};

export default Carousel;
