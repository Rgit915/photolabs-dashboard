import React, { Component } from "react";
import Loading from "./Loading";
import classnames from "classnames";
import Panel from "./Panel"


//fake data
const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  },
];
class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };

  //Function take id and set state of focused
  selectPanel(id) {
    this.setState({
     focused: id
    });
   }

  render() {
    const dashboardClasses = classnames("dashboard",
    {"dashboard--focused": this.state.focused});

    if (this.state.loading) {
      return <Loading />;
    }
  // Map over the data array and create Panel components for each item
  const panelElements =  (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data).map((panel) => (
    <Panel
      key={panel.id}
      id={panel.id}
      label={panel.label}
      value={panel.value}
      onSelect={this.selectPanel}
    />
  ));

  return <main className={dashboardClasses}>{panelElements}</main>;

  }
}

export default Dashboard;
