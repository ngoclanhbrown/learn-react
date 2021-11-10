import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Something went wrong. <Link to="/">Click here</Link> to go back to the
          home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
