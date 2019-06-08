import React, { Component } from "react";
import "./Events.css";
import events from './events.json';
import { Row, Col } from "../../Modules";

class Events extends Component {

    render() {

        return (
            <div>
                {events.map(events => (
                    <div className="card mb-2 bgCard" key={events.id}>
                        <div className="card-body">
                            <Row>
                                <Col size="md-7">
                                    <img className="img-fluid rounded" id="eventImg" src={events.imagesrc} alt="eventPic" />
                                </Col>
                                <Col size="sm-5">
                                    <div className="ml-5">
                                        <h4><b>Event Name: </b> </h4>
                                        <h5>{events.name}</h5>
                                        <br />
                                        <h4><b>Date: </b> </h4>
                                        <h5>{events.date}</h5>
                                        <br />
                                        <h4><b>Time: </b> </h4>
                                        <h5>{events.time}</h5>
                                        <br />
                                        <h4><b>Website: </b> </h4>
                                        <h5><a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href={events.websitehref}>Burge Road Farm</a></h5>
                                        <br />
                                        <h4><b>Where: </b> </h4>
                                        <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.googleDirections}><img id="directionIcon" src={require("../../images/gmap_image.png")} alt="gmap" /></a></span>
                                        <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.wazeDirections}><img id="directionIcon" src={require("../../images/waze_image.png")} alt="wmap" /></a></span>
                                        <span><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.appleDirections}><img id="directionIcon" src={require("../../images/apple_image.png")} alt="amap" /></a></span>
                                        <br /><br />
                                        <h4><b>Add To Your Calendar: </b> </h4>
                                        <h5><a className="rounded-circle" target="_blank" rel="noopener noreferrer" href={events.calendar}>
                                            <img id="directionIcon" src={require("../../images/gcalendar_image.png")} alt="gcalendar" />
                                        </a></h5>
                                        {/* <div id="calendarDiv">
                                        <h4><a className="badge badge-pill badge-secondary" target="_blank" rel="noopener noreferrer" href={events.calendar}><img height="25vh" src={require("../../images/gcalendar_image.png")} alt="gcalendar" /> Add to your Calendar</a></h4>
                                    </div> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )).reverse()}
            </div>
        );
    };
};

export default Events;
