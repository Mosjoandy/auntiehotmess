import React from "react";
import "./Schedule.css";
// import Map from "../Map";

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
          <div className="scheduleBody">
            <div className="card">
              <div className="card-header text-center">
                <h1><b>Stock Market</b></h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <img className="img-fluid rounded" id="stockMarketImg" src="https://static1.squarespace.com/static/55567d30e4b0bd68287f6661/56a13d95a2bab874f0b21f28/5a7e32eaf9619ab21fa99468/1518220028472/Stockmarket-2018_insta-1%281%29.jpg?format=1500w" alt="stockton" />
                  </div>
                  <div className="col-sm-5">
                    <h4><b>Date: </b> </h4>
                    <h4>August 11, 2018</h4>
                    <br />
                    <h4><b>Time: </b> </h4>
                    <h4>10:00am - 4:00pm</h4>
                    <br />
                    <h4><b>Website: </b> </h4>
                    <h4><a className="badge badge-pill badge-secondary" href="http://www.stockmarketca.com/">Stock Market</a></h4>
                    <br />
                    <h4><b>Where: </b> </h4>
                    <span><a className="rounded-circle" href="https://goo.gl/maps/vPMoZjwQzr22"><img id="directionIcon" src={require("../images/gmap_image.png")} alt="gmap" /></a></span>
                    <span><a className="rounded-circle" href="https://www.waze.com/ul?ll=37.95883334%2C-121.29141212&navigate=yes&zoom=17"><img id="directionIcon" src={require("../images/waze_image.png")} alt="wmap" /></a></span>
                    <span><a className="rounded-circle" href="http://maps.apple.com/?daddr=37.9587044,-121.2935826"><img id="directionIcon" src={require("../images/apple_image.png")} alt="amap" /></a></span>
                    <br /><br /><br /><br />
                    <div id="calendarDiv">
                      <h4><a className="badge badge-pill badge-secondary" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Stock+Market&dates=20180811T170000Z/20180811T230000Z&location=Stockton+California,+2+E+Oak+St+,+Stockton,+CA+95202&sf=true&output=xml"><img height="25vh" src={require("../images/gcalendar_image.png")} alt="gcalendar" /> Add to your Calendar</a></h4>
                    </div>
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
