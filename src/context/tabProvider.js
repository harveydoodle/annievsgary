import React, { Component } from "react";
import TabContext from "./tabContext";

const mockTabData = {
  puyo: { id: 1, key: "puyo", title: "puyo puyo" },
  tetris: { id: 2, key: "tetris", title: "tetris battle" },
  skribbl: { id: 3, key: "skribbl", title: "skribbl.io" },
};

class TabProvider extends Component {
  state = {
    tabsData: mockTabData,
    active_tab_id: "tetris",
  };

  render() {
    return (
      <TabContext.Provider
        value={{
          ...this.state,
          setActiveTab: (data) => {
            this.setState({
              active_tab_id: data,
            });
          },
          getTabsData: (data) => {
            console.log(data);
          },
        }}
      >
        {this.props.children}
      </TabContext.Provider>
    );
  }
}

export default TabProvider;
