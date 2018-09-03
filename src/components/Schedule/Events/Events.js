import React, { Component } from "react";
import "./Events.css";
import events from './events.json';

class Events extends Component {

    render() {

        return (
            <div>
                {events.map(events => (
                    <div className="card mb-2" key={events.id}>
                        <div className="card-header text-center">
                            <h2><b>{events.name}</b></h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <img className="img-fluid rounded" id="eventImg" src={events.imagesrc} alt="eventPic" />
                                </div>
                                <div className="col-sm-5">
                                    <h4><b>Date: </b> </h4>
                                    <h4>{events.date}</h4>
                                    <br />
                                    <h4><b>Time: </b> </h4>
                                    <h4>{events.time}</h4>
                                    <br />
                                    <h4><b>Website: </b> </h4>
                                    <h4><a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href={events.websitehref}>Stock Market</a></h4>
                                    <br />
                                    <h4><b>Where: </b> </h4>
                                    <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.googleDirections}><img id="directionIcon" src={require("../../images/gmap_image.png")} alt="gmap" /></a></span>
                                    <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.wazeDirections}><img id="directionIcon" src={require("../../images/waze_image.png")} alt="wmap" /></a></span>
                                    <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.appleDirections}><img id="directionIcon" src={require("../../images/apple_image.png")} alt="amap" /></a></span>
                                    <br /><br /><br /><br />
                                    <div id="calendarDiv">
                                        <h4><a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href={events.calendar}><img height="25vh" src={require("../../images/gcalendar_image.png")} alt="gcalendar" /> Add to your Calendar</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )).reverse()}
            </div>
        );
    };
};

export default Events;
