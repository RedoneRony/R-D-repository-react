
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/newline-after-import */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable react-hooks/exhaustive-deps */
// import { faBolt, faBullseye, faFlag, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import siteApi from "../../../api/siteApi";
import { AuthContext } from "../../../Context/AuthContext";
// import "../CompanyVision/CompanyVision.css";
// import OneYearPlanNew from "../OneYearPlan/OneYearPlanNew";
import YearPlan from "../YearPlan/YearPlan";
import "./PlanModule.scss";

const tabStateSecond = [false, false, false];

const paramsList = {
  1: 0,
  3: 1,
  10: 2,
};
const PlanModule = () => {
  const [tabsTwo, setTabsTwo] = useState([true, false, false]);
  const [yearsData, setYearsData] = useState([]);
  const history = useHistory();
  const params = useLocation();
  const { plan } = params;
  const { search } = useLocation();
  const { oid } = useContext(AuthContext);

  const query = new URLSearchParams(search);
  const yearNo = history.location.search
    ? history.location.search?.split("=")[1]
    : "1";
  // main tab for VISION And PLAN
  const handleTabsTwo = (index) => {
    const newTabsTwo = [...tabStateSecond];
    newTabsTwo[index] = true;
    setTabsTwo(newTabsTwo);
  };
  useEffect(() => {
    handleTabsTwo(paramsList[yearNo]);
    siteApi.get(`/Plan/${oid}/${yearNo}`).then((res) => {
      setYearsData(res.data?.filter((item) => item.YearNo === yearNo));
    });
  }, [yearNo]);

  return (
    <>
      <div className="container-fluid">
        <div className="row plan-header d-flex">
          <div className="col pt-4 ">
            <h5
              className={`m-0 tab-style ${
                tabsTwo[0] ? "active_vision_top" : "vision-top"
              }`}
              onClick={() => {
                history.push("/planModule/?plan=1");
              }}
            >
              1 YEAR PLAN
            </h5>
          </div>

          <div className="col pt-4 ">
            <h5
              className={`m-0 tab-style ${
                tabsTwo[1] ? "active_vision_top" : "vision-top"
              }`}
              onClick={() => {
                history.push("/planModule/?plan=3");
              }}
            >
              3 YEAR PLAN
            </h5>
          </div>
          <div className="col pt-4 ">
            <h5
              className={`m-0 tab-style ${
                tabsTwo[2] ? "active_vision_top" : "vision-top"
              }`}
              onClick={() => {
                history.push("/planModule/?plan=10");
              }}
            >
              10 YEAR PLAN
            </h5>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-md-12 col-sm-12 pt-2 bg-white">
            {tabsTwo[0] && (
              <YearPlan
                yearNo={yearNo}
                oid={oid}
                yearsData={yearsData}
              ></YearPlan>
            )}
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-md-12 col-sm-12 pt-2 bg-white">
            {tabsTwo[1] && (
              <YearPlan
                yearNo={yearNo}
                oid={oid}
                yearsData={yearsData}
              ></YearPlan>
            )}
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-md-12 col-sm-12 pt-2 bg-white">
            {tabsTwo[2] && (
              <YearPlan
                yearNo={yearNo}
                oid={oid}
                yearsData={yearsData}
              ></YearPlan>
            )}
          </div>
        </div>
      </div>
      {/* <Container fluid>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="three-year-plan"
              id="strategic-plan-tab"
              className=""
              justify
            >
              <Tab eventKey="one-year-plan" title="1 YEAR PLAN">
                <OneYearPlanNew></OneYearPlanNew>
              </Tab>
              <Tab eventKey="three-year-plan" title="3 YEAR PLAN">
                <OneYearPlanNew></OneYearPlanNew>
              </Tab>
              <Tab eventKey="ten-year-plan" title="10 YEAR PLAN">
                <OneYearPlanNew></OneYearPlanNew>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default PlanModule;
