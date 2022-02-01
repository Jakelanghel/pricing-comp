import React from "react";
import PriceSlider from "./PriceSlider";
import "../components/ContainerAbsolute.css";

const ContainerAbsolute = (props) => {
    return (
        <div className='container-absolute'>
            <PriceSlider
                handlePageSlide={props.handlePageSlide}
                pageViewData={props.pageViewData}
                billingState={props.billingState}
                handleBillingSlide={props.handleBillingSlide}
            />
        </div>
    );
};

export default ContainerAbsolute;
