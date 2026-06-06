import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <p className="error-fallback-label">// something went wrong</p>
          <h1>Page failed to load</h1>
          <p>Try refreshing — this can happen after an update while the tab was open.</p>
          <button type="button" className="btn-cyan-solid" onClick={this.handleReload}>
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
