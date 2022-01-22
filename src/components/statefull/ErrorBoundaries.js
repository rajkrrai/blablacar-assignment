import React, { Component } from "react";
import NoResult from "../stateless/NoResult";
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
