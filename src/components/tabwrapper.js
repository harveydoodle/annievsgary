import React, { Component } from "react";
import { map } from "lodash";

import "../styles/tabwrapper.css";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    const { handleTabSwitch, tabData } = this.props;
    const { active_tab_id } = tabData;
    return (
      <div className="tabs-wrapper">
        {map(tabData.tabs, (each) => {
          const isActive = each.id === active_tab_id;
          return (
            <span
              key={each.id}
              className="individual-tab-wrapper"
              style={isActive ? { fontWeight: "bold" } : null}
              onClick={() => handleTabSwitch(each.id)}
            >
              {each.name}{" "}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
