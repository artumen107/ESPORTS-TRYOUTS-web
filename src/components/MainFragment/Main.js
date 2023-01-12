import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import "./Main.scss";
import FragmentBar from '../../components/FragmentBar/FragmentBar.js';
import { useBannerContext } from '../../context/BannerContext';
import { BannerContextProvider } from "../../context/BannerContext";
import { DatabaseContextProvider } from '../../context/DatabaseStats';

const MainFragment = (props) => {

    return (
        <DatabaseContextProvider>
            <BannerContextProvider>
                <div className='component-main-fragment'>
                    <div className='component-main-fragment-inner'>

                        {props.fragmentBar && <FragmentBar />}
                        <Outlet />
                    </div>
                </div>
            </BannerContextProvider >
        </DatabaseContextProvider>

    )

}

MainFragment.defaultProps = {
    fragmentBar: true,
};

export default MainFragment