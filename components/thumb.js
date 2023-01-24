class Thumb extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: this.props.name },
            React.createElement("img", { className: "thumb-img", src: this.props.imagePath, onClick: function (e) {
                    this.props.switchSlices(this.props.value);
                }.bind(this) })
        );
    }
}

export default Thumb;