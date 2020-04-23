import React, { Component } from "react";
import axios from "axios";

function withComponentAPI(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false, // TODO loading true on site page load? or on tab changes
        scoreData: [],
      };
    }

    componentDidMount() {
      // fetch data...
      axios
        .get("http://localhost:3002/")
        .then(({ data }) => {
          this.setState({
            scoreData: data,
          });
        })
        .catch((error) => {
          // handle error
          // TODO: handle error states
        })
        .then(() => {
          // always executed
        });
    }

    componentDidUpdate(prevProps) {
      /// update data..
    }

    render() {
      const { scoreData } = this.state;
      const { tabData, toggleModal } = this.props;
      const passedProps = {
        scoreData,
        tabData,
        toggleModal,
      };
      return <WrappedComponent {...passedProps} />;
    }
  };
}

export default withComponentAPI;
