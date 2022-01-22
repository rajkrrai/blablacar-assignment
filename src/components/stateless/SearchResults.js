import moment from "moment";
import React, { Fragment } from "react";
import ErrorBoundary from "../statefull/ErrorBoundaries";
export const SearchResults = ({ trips }) => {
  // console.log(trips.length);

  return (
    <Fragment>
      {trips.map((item, idx) => {
        let distance = (item.distance_in_meters / 1000).toFixed(2);
        let travelTime = (item.duration_in_seconds / 3600).toFixed(2);

        // @ calculate the time of departure from now and populate depart msg
        let today = new Date();
        today = moment(today).format("HH:mm");
        let startTime = moment(item.waypoints[0].date_time).format("HH:mm");

        let elapsedTime = moment(item.waypoints[0].date_time).fromNow("hh:s");
        let departMsg;
        if (today > startTime) {
          departMsg = `Departed ${elapsedTime} ago`; //if time elapsed just how many mins ago
        } else {
          departMsg = `Departs at ${moment(item.waypoints[0].date_time).format(
            "HH:mm"
          )} ~${elapsedTime} from now`; //for future ride: show time and time remaining
        }

        return (
          <ErrorBoundary key={idx}>
            <div className="card mb-4">
              <div className="card-body">
                {/* daparture block */}
                <div className="address-block">
                  <a
                    target="_blank"
                    href={item.link}
                    className="address-link"
                    rel="noreferrer"
                  >
                    <div className="cityAddress">
                      <i className="fas fa-map-marker-alt mapicon"></i>
                      <div className="div">
                        <p className="address-main">
                          {item.waypoints[0].place.address} &mdash;{" "}
                          <span className="departMsg">{departMsg}</span>
                        </p>
                        {/* address */}
                        <p className="city-main">
                          {" "}
                          {item.waypoints[0].place.city}
                        </p>{" "}
                        {/* city */}
                      </div>
                    </div>

                    <div className="rightChevron">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </div>
                <h6 className="text-center">To</h6>
                {/* arrival block */}
                <div className="address-block">
                  <a
                    target="_blank"
                    href={item.link}
                    className="address-link"
                    rel="noreferrer"
                  >
                    <div className="cityAddress">
                      <i className="fas fa-map-marker-alt mapicon"></i>
                      <div className="div">
                        <p className="address-main">
                          {item.waypoints[1].place.address} &mdash;
                          <span className="departMsg">
                            Arrival: &nbsp;
                            {moment(item.waypoints[1].date_time).format(
                              "HH:mm"
                            )}
                          </span>
                        </p>
                        {/* address */}
                        <p className="city-main">
                          {" "}
                          {item.waypoints[1].place.city}
                        </p>{" "}
                        {/* city */}
                      </div>
                    </div>

                    <div className="rightChevron">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                </div>

                <hr />
                {/* Price and car model section */}
                <div className="price-car-Details">
                  <div className="carDetail">
                    {" "}
                    <p className="text-muted">Total price for 1 passenger</p>
                    <p className="text-bold">€ {item.price.amount}</p>
                  </div>
                  <hr />
                  <div className="carDetail">
                    <div className="carModel">
                      <p className="text-bold">
                        {"vehicle" in item ? item.vehicle.make : "NA"}
                      </p>
                      <p className="text-muted">
                        {"vehicle" in item ? item.vehicle.model : "NA"}
                      </p>
                    </div>
                    <div className="carImg">
                      <i className="fas fa-car"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer text-muted text-center">
                <span>
                  <i className="fas fa-road mx-2"></i> Distance: ~ {distance} Km
                </span>{" "}
                |
                <span>
                  <i className="far fa-clock mx-2"></i> Time: ~ {travelTime}{" "}
                  Hours
                </span>
              </div>
            </div>
          </ErrorBoundary>
        );
      })}
    </Fragment>
  );
};

export default SearchResults;
