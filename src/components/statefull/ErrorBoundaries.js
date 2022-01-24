import React, { Component } from "react";
import NoResult from "../stateless/NoResult";

/**
 * Class component: This ErrorBoundary component is used to catch the error when wrapped around the element and helps prevent the entire app from crashing or showing blank screen to the users
 * @returns {JSX.Element} - Rendered component (an image with no result found and a message)
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo); //log the error or send to error reporting tool
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <NoResult />
          <h1 className="mt-3">Ooops!! Something went wrong... </h1>;
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
