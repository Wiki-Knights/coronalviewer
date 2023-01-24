function Item(props) {
  return React.createElement(
    "p",
    { key: "inner-" + props.src, className: `${props.active ? "active" : ""} ${props.name}`,
      onClick: function () {
        props.toggleOverlay(props.src);props.toggleActive(props.src);
      } },
    props.label
  );
}

export default Item;