import React from "react";
import ImageUploader from "react-images-upload";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.name = "";
    this.message = "No image uploaded";
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
      name: `${picture[0].name}`,
      message: "Image Uploaded Successfully"
    });
  }

  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <p align="center">{this.state.name}</p>
        <p align="center">{this.state.message}</p>
      </div>
    );
  }
}

export default Image;
