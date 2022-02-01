import React from "react";
import "../index.css";
import "./PriceSlider.css";
import checkMark from "../images/icon-check.svg";

const PriceSlider = (props) => {
    return (
        <div className='container-price-slider'>
            <div className='container-page-views'>
                <label
                    htmlFor='pageSlider'
                    className='page-slider-label'
                    id='slider'
                >
                    {`${props.pageViewData.pageViews} pageviews`}
                </label>

                <input
                    type='range'
                    className='page-slider'
                    id='pageSlider'
                    onChange={(e) =>
                        props.handlePageSlide(e, props.pageViewData)
                    }
                    min={1}
                    max={5}
                    step='1'
                    value={props.pageViewData.value}
                />

                <p className='page-slider-output'>
                    {props.billingState.isDiscount
                        ? props.pageViewData.discount
                        : props.pageViewData.price}
                    <span className='output-span'>/ month</span>
                </p>
            </div>

            <div className='container-billing'>
                <label htmlFor='billingSlider' className='billing-label'>
                    monthly billing
                </label>
                <input
                    type='range'
                    min='1'
                    max='2'
                    value={props.billingState.value}
                    className='billing-slider'
                    id='billingSlider'
                    onChange={(e) => props.handleBillingSlide(e)}
                ></input>
                <label htmlFor='billingSlider' className='billing-label'>
                    yearly billing{" "}
                    <span className='discount'>
                        -25%<span className='discount-txt'> discount</span>
                    </span>
                </label>
            </div>

            <div className='container-trial'>
                <div className='container-perks'>
                    <p className='perk'>
                        <img
                            src={checkMark}
                            alt='checkmark'
                            className='checkmark'
                        />
                        Unlimited websites
                    </p>

                    <p className='perk'>
                        <img
                            src={checkMark}
                            alt='checkmark'
                            className='checkmark'
                        />
                        100% data ownership
                    </p>

                    <p className='perk'>
                        <img
                            src={checkMark}
                            alt='checkmark'
                            className='checkmark'
                        />
                        Email reports
                    </p>
                </div>

                <button className='cta-btn'>Start my trial</button>
            </div>
        </div>
    );
};

export default PriceSlider;
