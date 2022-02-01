import React from "react";
import "./Background.css";
import ContainerAbsolute from "../components/Container-absolute";

const Background = (props) => {
    return (
        <div className='container-background'>
            <div className='container-header'>
                <div className='title-card'>
                    <h1 className='title'>Simple, traffic-based pricing</h1>
                    <p className='subtitle'>
                        Sign-up for our 30-day free trial.
                    </p>
                    <p className='subtitle'>No credit card required.</p>
                </div>
            </div>
        </div>
    );
};

export default Background;
