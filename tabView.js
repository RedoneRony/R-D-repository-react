import React, { useState, useEffect } from 'react';
import '../CompanyVision/CompanyVision.css';
import './PlanModule.css';
import OneYearPlan from '../OneYearPlan/OneYearPlan';
import ThreeYearPlan from '../ThreeYearPlan/ThreeYearPlan';
import TenYearPlan from '../TenYearPlan/TenYearPlan';
const tabStateSecond = [false, false, false];
 
 
const PlanModule = () => {
 
    const [tabsTwo, setTabsTwo] = useState([true,false, false]);
 
    // main tab for VISION And PLAN
    const handleTabsTwo = (index) => {
        const newTabsTwo = [...tabStateSecond];
        newTabsTwo[index] = true;
        setTabsTwo(newTabsTwo);
    }
 
 
    return (
        <div className="container-fluid">
               
                <div className="row plan-header d-flex">
                       
                    <div className="col-md-3 col-sm-12 pt-4 ">
                            <h5
                                className={tabsTwo[0] ? 'active_vision_top' : 'vision-top'}
                                onClick={() => {
                                    handleTabsTwo(0);
                        }}>1 YEAR PLAN</h5>
                    </div>
 
                    <div className="col-md-3 col-sm-12 pt-4 ">
                        <h5
                            className={tabsTwo[1] ? 'active_vision_top' : 'vision-top'}
                            onClick={() => {
                                handleTabsTwo(1);
                    }}
                        >
                             3 YEAR PLAN
                        </h5>
                    </div>
                    <div className="col-md-3 col-sm-12 pt-4 ">
                        <h5
                            className={tabsTwo[2] ? 'active_vision_top' : 'vision-top'}
                            onClick={() => {
                                    handleTabsTwo(2);
                    }}
                        >
                             10 YEAR PLAN
                        </h5>
                    </div>
 
                </div>
           
            <div className="row d-flex">
            <div className="col-md-12 col-sm-12 pt-2 ">
            { tabsTwo[0]  && (
            <OneYearPlan></OneYearPlan>
            )}
            </div>  
            </div>
 
            <div className="row d-flex">
                <div className="col-md-12 col-sm-12 pt-2 ">
                { tabsTwo[1]  && (
              <ThreeYearPlan></ThreeYearPlan>
               )}
            </div>  
            </div>
 
            <div className="row d-flex">
                <div className="col-md-12 col-sm-12 pt-2 ">
                { tabsTwo[2]  && (
              <TenYearPlan></TenYearPlan>
               )}
            </div>  
            </div>
        </div>
    );
};
 
export default PlanModule;
