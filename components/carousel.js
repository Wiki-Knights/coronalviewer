import Thumb from './thumb.js';
import Arrow from './arrow.js';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.thumbContainer = React.createRef();
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.renderThumbs = this.renderThumbs.bind(this);
        this.state = {
            totalThumbs: this.props.data.length
        };
    }

    //might need to use animejs for this, maybe some online carousel but i dont like that
    slideRight() {
        let decay = 1;
        let anim = setInterval(() => {
            document.querySelector(".thumb-wrapper").scrollLeft += 33 * decay;
            (decay -= 0.03) < 0 ? clearInterval(anim) : null;
        }, 10);
    }

    slideLeft() {
        let decay = 1;
        let anim = setInterval(() => {
            document.querySelector(".thumb-wrapper").scrollLeft -= 33 * decay;
            (decay -= 0.03) < 0 ? clearInterval(anim) : null;
        }, 10);
    }

    renderThumbs() {
        return this.props.data.map(function (curr, i) {
            let classes = `${i === 0 ? "card-left" : "card"} ${i === this.props.slice ? "card-selected" : ""}`;
            return React.createElement(Thumb, { key: "thumb-" + i, value: i, name: classes, imagePath: this.props.path + curr.path + curr.thumb + ".png", switchSlices: this.props.switchSlices });
        }.bind(this));
    }

    render() {
        return React.createElement(
            'div',
            { className: 'carouselContainer' },
            React.createElement(Arrow, { name: 'leftArrow', dir: 'left', onclick: this.slideLeft }),
            React.createElement(
                'div',
                { className: 'thumb-wrapper', ref: this.thumbContainer },
                this.renderThumbs()
            ),
            React.createElement(Arrow, { name: 'rightArrow', dir: 'right', onclick: this.slideRight })
        );
    }
}

export default Carousel;