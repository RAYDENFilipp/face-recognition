import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
    particles: {
        number: {
            value: 58,
            density: {
                enable: false,
                value_area: 801.7060304327614
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
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
    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/*

                <FaceRecognition /> */}
            </div>
        );
    }
}

export default App;
