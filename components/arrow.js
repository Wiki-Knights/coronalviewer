function Arrow(props) {

    var onOverLeft = function (e) {
        e.target.setAttribute("src", "./images/nav-left_hover.svg");
    };

    var onOverRight = function (e) {
        e.target.setAttribute("src", "./images/nav-right_hover.svg");
    };

    var onOutLeft = function (e) {
        e.target.setAttribute("src", "./images/nav-left.svg");
    };

    var onOutRight = function (e) {
        e.target.setAttribute("src", "./images/nav-right.svg");
    };

    return React.createElement(
        "div",
        { className: props.name },
        React.createElement("img", { onClick: props.onclick, src: props.dir === "left" ? "./images/nav-left.svg" : "./images/nav-right.svg",
            onMouseOver: props.dir === "left" ? onOverLeft : onOverRight, onMouseOut: props.dir === "left" ? onOutLeft : onOutRight })
    );
}

export default Arrow;