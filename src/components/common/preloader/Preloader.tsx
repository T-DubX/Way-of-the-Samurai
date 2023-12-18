import React from 'react';
import preloader from "../../../assets/images/loader.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='spinner'/>
        </div>
    );
};
