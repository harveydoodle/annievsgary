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
        {map(tabData.tabs, (each, id, index) => {
          const isActive = each.key === active_tab_id;
          const isLeftEdge = each.id === 1;
          const isRightEdge = each.id === Object.keys(tabData.tabs).length;
          return (
            <span
              key={each.id}
              className={`individual-tab-wrapper ${
                isLeftEdge && "tab-left-edge"
              } ${isRightEdge && "tab-right-edge"} `}
              style={isActive ? { fontWeight: "bold" } : null}
              onClick={() => handleTabSwitch(each.key)}
            >
              {each.title}{" "}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
