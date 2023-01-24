import Nav from './nav.js';
import Arrow from './arrow.js';

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.toggleMRI = this.toggleMRI.bind(this);
        this.overlays = this.overlays.bind(this);
        this.mris = this.mris.bind(this);
        this.getSource = this.getSource.bind(this);
        this.state = {
            mode: "overlay",
            mris: [],
            overlays: []
        };
    }

    toggleOverlay(src) {
        //if overlay src is in state.overlays, remove otherwise add
        //set viewing mode to overlay
        let index = this.state.overlays.indexOf(src);
        if (index > -1) {
            this.setState(prevState => {
                prevState.overlays.splice(index, 1);
                let next = prevState.overlays;
                return { overlays: next, mode: "overlay" };
            });
        } else {
            this.setState(prevState => {
                prevState.overlays.push(src);
                let next = prevState.overlays;
                return { overlays: next, mode: "overlay" };
            });
        }
    }

    toggleMRI(src) {
        //if mri is in state.mris, remove otherwise add
        //if mri list is empty after remove, switch back to overlay mode
        let index = this.state.mris.indexOf(src);
        if (index > -1) {
            this.setState(prevState => {
                prevState.mris.splice(index, 1);
                let next = prevState.mris;
                if (next.length > 0) {
                    return { mris: next, mode: "mri" };
                } else {
                    console.log("mri empty");
                    return { mris: next, mode: "overlay" };
                }
            });
        } else {
            this.setState(prevState => {
                prevState.mris.push(src);
                let next = prevState.mris;
                return { mris: next, mode: "mri" };
            });
        }
    }

    overlays() {
        let source = this.getSource();
        return this.state.overlays.map((curr, i) => {
            //dont show the ones that aren't on current slice
            let check = source.path.split("/")[0];
            if (check === curr.substring(0, check.length)) {
                return React.createElement('img', { key: "overlay_primary-" + i, src: this.props.path + source.path + curr + ".png", className: "overlayImage" });
            } else {
                return null;
            }
        });
    }

    mris() {
        let source = this.getSource();
        return this.state.mris.map((curr, i) => {
            let check = source.path.split("/")[0];
            if (check === curr.substring(0, check.length)) {
                return React.createElement('img', { key: "mri_primary-" + i, src: this.props.path + source.path + curr + ".png", className: 'overlayImage' });
            } else {
                return null;
            }
        });
    }

    getSource() {
        return this.props.data[this.props.slice];
    }

    componentDidUpdate(prevProps) {
        if (this.props.slice !== prevProps.slice) {
            this.setState(prevState => {
                return {
                    mris: [],
                    overlays: []
                };
            });
        }
    }

    render() {
        return React.createElement(
            'div',
            { className: 'viewerContainer' },
            React.createElement(
                'div',
                { className: 'view' },
                React.createElement(
                    'div',
                    { className: "imageContainer" },
                    React.createElement('img', { className: "mainImage", src: this.props.path + this.getSource().path + this.getSource().view.main + ".png" }),
                    this.state.mode === "overlay" ? this.overlays() : this.mris()
                ),
                React.createElement(Arrow, { name: 'prev-slice', dir: 'left', onclick: function () {
                        this.props.switchSlices(this.props.slice - 1);
                    }.bind(this) }),
                React.createElement(Arrow, { name: 'next-slice', dir: 'right', onclick: function () {
                        this.props.switchSlices(this.props.slice + 1);
                    }.bind(this) })
            ),
            React.createElement(Nav, { toggleOverlay: this.toggleOverlay, toggleMRI: this.toggleMRI, overlays: this.getSource().view.overlays,
                mri: this.getSource().view.mri, textLabels: this.getSource().view.textLabels, perfusionAreas: this.getSource().view.perfusionAreas })
        );
    }
}

export default Viewer;