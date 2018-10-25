import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
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
            input: ""
        };
    }

    onInputChange = event => {
        console.log(event.target.value);
    };

    onButtonSubmit = () => {
        console.log("click");
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
            function (response) {
                // do something with response
            },
            function (err) {
                // there was an error
            }
        );
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                {/*

                <FaceRecognition /> */}
            </div>
        );
    }
}

export default App;
