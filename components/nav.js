import Item from './item.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
    this.listItems = this.listItems.bind(this);
    this.mriItem = this.mriItem.bind(this);
    this.labeledmriItem = this.labeledmriItem.bind(this);
    this.textLabelsItem = this.textLabelsItem.bind(this);
    this.perfusionAreasItem = this.perfusionAreasItem.bind(this);
    this.state = {
      active: []
    };
  }

  toggleActive(src) {
    this.setState(prevState => {
      let index = prevState.active.indexOf(src);
      if (index > -1) {
        prevState.active.splice(index, 1);
        return { active: prevState.active };
      } else {
        prevState.active.push(src);
        return { active: prevState.active };
      }
    });
  }

  listItems() {
    if (this.props.overlays.length > 0) {
      return this.props.overlays.map(function (cur, i) {
        return React.createElement(Item, { key: cur.src, active: this.state.active.includes(cur.src), name: "label", toggleOverlay: this.props.toggleOverlay, src: cur.src,
          toggleActive: this.toggleActive, label: cur.label });
      }.bind(this));
    } else {
      return React.createElement(
        "p",
        { className: "label" },
        "No Areas to Highlight"
      );
    }
  }

  mriItem() {
    return this.props.mri.src ? React.createElement(Item, { name: "mri" + " label", active: this.state.active.includes(this.props.mri.src),
      toggleOverlay: this.props.toggleMRI, src: this.props.mri.src, toggleActive: this.toggleActive, label: "view MRI" }) : null;
  }

  labeledmriItem() {
    return this.props.mri.labels ? React.createElement(Item, { name: "mri" + " label", active: this.state.active.includes(this.props.mri.labels),
      toggleOverlay: this.props.toggleMRI, src: this.props.mri.labels, toggleActive: this.toggleActive, label: "view LABELLED MRI" }) : null;
  }

  textLabelsItem() {
    return this.props.textLabels ? React.createElement(Item, { name: "mri" + " label", active: this.state.active.includes(this.props.textLabels),
      toggleOverlay: this.props.toggleOverlay, src: this.props.textLabels, toggleActive: this.toggleActive, label: "view TEXT LABELS" }) : null;
  }

  perfusionAreasItem() {
    return this.props.perfusionAreas ? React.createElement(Item, { name: "mri" + " label", active: this.state.active.includes(this.props.perfusionAreas),
      toggleOverlay: this.props.toggleOverlay, src: this.props.perfusionAreas, toggleActive: this.toggleActive, label: "view PERFUSION AREAS" }) : null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.overlays !== prevProps.overlays) {
      this.setState(prevState => {
        return {
          active: []
        };
      });
    }
  }
  render() {
    return React.createElement(
      "div",
      { className: "navigator" },
      this.listItems(),
      React.createElement("br", null),
      this.textLabelsItem(),
      React.createElement("br", null),
      this.perfusionAreasItem(),
      React.createElement("br", null),
      this.mriItem(),
      this.labeledmriItem()
    );
  }
}

export default Nav;