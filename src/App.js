import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import "./App.css";

const app = new Clarifai.App({
    apiKey: "df64e530fcec4eac83d0c18e506c7f49"
});

const particlesOptions = {
    particles: {
        number: {
            value: 58
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 0,
            random: true,
            anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 27.610625218245733,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 320.6824121731046,
            color: "#5f2e00",
            opacity: 0.1763753266952075,
            width: 2.4051180912982844
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    retina_detect: true
};
class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
            box: {},
            route: "signin"
        };
    }

    calculateFaceLocation = data => {
        const clarifaiFace =
            data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("inputimage");
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width, height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height
        };
    };

    displayFaceBox = box => {
        console.log(box);
        this.setState({ box: box });
    };

    onInputChange = event => {
        this.setState({ input: event.target.value });
    };

    onButtonSubmit = () => {
        this.setState({
            imageUrl: this.state.input
        });
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response =>
                this.displayFaceBox(this.calculateFaceLocation(response))
            )
            .catch(err => console.log(err));
    };

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />
                <Navigation onRouteChange={this.onRouteChange}/>
                {this.state.route === "signin" ? (
                    <Signin onRouteChange={this.onRouteChange} />
                ) : (
                    <div>
                        <Logo />
                        <Rank />
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition
                            box={this.state.box}
                            imageUrl={this.state.imageUrl}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
