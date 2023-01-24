import Viewer from './components/viewer.js';
import Carousel from './components/carousel.js';
import SlicesInfo from './util/slicesInfo.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.switchSlices = this.switchSlices.bind(this);
        this.state = {
            currentSlice: 0
        };
    }

    switchSlices(slice) {
        this.setState(function (prevState) {
            if (slice < 0 || slice >= SlicesInfo.data.length) {
                return { currentSlice: prevState.currentSlice };
            } else {
                return { currentSlice: slice };
            }
        });
    }

    render() {
        return React.createElement('div', { className: 'outer' }, React.createElement('div', { className: 'gridContainer' }, React.createElement(Carousel, { slice: this.state.currentSlice, data: SlicesInfo.data, path: SlicesInfo.path, switchSlices: this.switchSlices }), React.createElement(Viewer, { slice: this.state.currentSlice, data: SlicesInfo.data, path: SlicesInfo.path, switchSlices: this.switchSlices })));
    }
}

export default App;