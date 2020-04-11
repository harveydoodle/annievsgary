import React, { Component } from "react";

const mockData = {
  1: { id: 1, name: "name1", rank: 1, score: 100 },
  2: { id: 2, name: "name2", rank: 2, score: 50 },
  3: { id: 3, name: "name3", rank: 4, score: 1 },
  4: { id: 4, name: "name4", rank: 3, score: 14 },
};

function withComponentAPI(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        scoreData: mockData,
      };
    }

    componentDidMount() {
      // fetch data...
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
