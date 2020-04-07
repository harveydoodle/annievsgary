import React, { Component } from "react";

function withComponentAPI(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
        // fetch data...
    }

    componentDidUpdate(prevProps) {
        /// update data.. 
    }

    render() {
      const passedProps = {};
      return <WrappedComponent {...passedProps} />;
    }
  };
}

export default withComponentAPI;
