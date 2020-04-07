import React, { Component } from "react";
import { map } from "lodash";

import "../styles/tabwrapper.css";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: props.tabData,
    };
  }
  render() {
    const { data } = this.state;
    const { handleTabSwitch}=this.props;
    return (
      <div className="tab-wrapper">
        <div>Active tab:</div>
        <div>
          {map(data.tabs, (each) => (
            <span onClick={()=>handleTabSwitch(each.id)}>{each.name} </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
