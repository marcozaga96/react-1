import { Component } from "react";

class ImageComponent extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <img src={this.props.imageProp} alt="ciao" />;
  }
}
export default ImageComponent;
