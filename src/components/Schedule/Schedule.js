import React from "react";
import "./Schedule.css";
import Map from "../Map";

const Schedule = () => (
  <div className="schedule" id="scheduleScroll">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="scheduleTitle">
            <hr />
            Schedule
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">

          <div className="bg-secondary scheduleBody">

            <div className="scheduleLeft col-sm-8">
              <div className="card">
                <div className="card-body">
                  <h2>Stock Market</h2>
                  <hr />
                  <table>
                    <tbody>
                      <tr className="scheduleTable">
                        <td><h4><b>Date: </b> </h4></td>
                        <td><h4>August, 11 2018</h4></td>
                      </tr>

                      <tr>
                        <td><h4><b>Time: </b> </h4></td>
                        <td><h4>10:00am - 4:00pm</h4></td>
                      </tr>
                      <tr>
                        <td><h4><b>Details: </b> </h4></td>
                        <td><h4>A curated marketplace featuring the Central Valley's best makers, vintage, and street food.</h4></td>
                      </tr>
                      <tr>
                        <td><h4><b>Website: </b> </h4></td>
                        <td><h4><a href="http://www.stockmarketca.com/">Stock Market</a></h4></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="scheduleRight col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3><b>Where:</b></h3>
                  <div id="mapRestraints">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
