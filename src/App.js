import React from "react";
import Background from "./components/Background";
import ContainerAbsolute from "./components/Container-absolute";

function App() {
    const [pageViewData, setPageViewData] = React.useState({
        value: 1,
        pageViews: "10k",
        price: "$8.00",
        discount: "$2.00",
        isDiscount: false,
    });

    const [billingState, setBillingState] = React.useState({
        isDiscount: false,
        value: 1,
    });

    const getPageViews = (e, newValue) => {
        const slider = e.target;
        removeToggleClasses(slider);
        if (newValue === "1") {
            return ["10K", "$8.00", "$2.00"];
        } else if (newValue === "2") {
            slider.classList.toggle("slider-2");
            return ["50K", "$12.00", "$3.00"];
        } else if (newValue === "3") {
            slider.classList.toggle("slider-3");
            return ["100K", "$16.00", "$4.00"];
        } else if (newValue === "4") {
            slider.classList.toggle("slider-4");
            return ["500K", "$24.00", "$6.00"];
        } else if (newValue === "5") {
            slider.classList.toggle("slider-5");
            return ["1M", "$36.00", "$9.00"];
        }
    };

    const removeToggleClasses = (slider) => {
        for (let i = 1; i < 6; i++) {
            slider.classList.remove(`slider-${i}`);
        }
    };

    const HandlePageSlide = (e, pageViewData) => {
        const slider = e.target;
        const newValue = e.target.value;
        const [pageViews, price, discount] = getPageViews(e, newValue);

        setPageViewData((oldData) => {
            return {
                ...oldData,
                value: newValue,
                pageViews: pageViews,
                price: price,
                discount: discount,
            };
        });
    };

    const handleBillingSlide = (e) => {
        setBillingState((oldState) => {
            const value = oldState.value === 1 ? 2 : 1;
            console.log(value);
            return {
                // ...oldState,
                isDiscount: !oldState.isDiscount,
                value: value,
            };
        });
    };

    return (
        <div>
            <Background />
            <ContainerAbsolute
                handlePageSlide={HandlePageSlide}
                pageViewData={pageViewData}
                billingState={billingState}
                handleBillingSlide={handleBillingSlide}
            />
        </div>
    );
}

export default App;
