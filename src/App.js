import React, { useState, useEffect } from "react";
import "./App.css";
import SearchResults from "./components/stateless/SearchResults";
import moment from "moment";
import Spinner from "./components/stateless/Spinner";
import NoResult from "./components/stateless/NoResult";
import axios from "axios";
import Pagination from "./components/stateless/Pagination";
import keys from "./config/keys";
function App() {
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [trips, setTrips] = useState([]);
  const [searchObj, setSearchObj] = useState(null);
  const [tripPossible, setTripPossible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tripsPerPage] = useState(5);

  let today = new Date();
  today = moment(today).format("D, MMMM");
  let apiDate = moment.parseZone(today).local(true).format().split("+")[0]; //2022-01-21T12:00:00

  useEffect(() => {
    const fetchMyRide = async () => {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://public-api.blablacar.com/api/v3/trips?key=${keys.api_key}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&currency=EUR&start_date_local=${apiDate}&count=100`
        );
        console.log("data:", res.data);
        // setSearchObj(res.data);
        let newSerchObj = res.data;
        console.log("newSerchObj:", newSerchObj);
        const { count, full_trip_count } = newSerchObj.search_info;
        const availableRides = count - full_trip_count;
        const { trips } = newSerchObj;
        console.log("trip", trips);
        console.log("trip length", trips.length);
        if (newSerchObj.trips.length > 0) {
          setTripPossible(true);
          setTrips(newSerchObj.trips);
          setResultMsg(
            `${availableRides} out of ${count} rides are available now.`
          );
        } else {
          setTripPossible(false);
          setResultMsg("No Rides Available");
        }
        setSearchObj(newSerchObj);
        console.log("searchObj:", searchObj);
        setLoading(false);
      } catch (err) {
        console.log("error Fetching data:", err);
        setLoading(false);
      }
    };
    fetchMyRide();
  }, []);

  /**
   * Pagination
   */
  // Get current trips
  const indexOfLastTrip = currentPage * tripsPerPage;
  const indexOfFirstTrip = indexOfLastTrip - tripsPerPage;
  const currentTrips = trips.slice(indexOfFirstTrip, indexOfLastTrip);
  console.log("indexOfLastTrip", indexOfLastTrip);
  console.log("indexOfFirstTrip", indexOfFirstTrip);
  console.log("currentTrips", currentTrips);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <header>
        <h4 className="travelDay text-primary">
          <i className="far fa-calendar-check"></i> Today &mdash; {today}
        </h4>
        <div className="mt-4">
          <h5 className="secondary-text">
            Paris <i className="fas fa-long-arrow-alt-right"></i> Lyon:{" "}
            <span className="secondary-text">{resultMsg}</span>
          </h5>
        </div>
      </header>

      {loading ? (
        <Spinner loading="true" />
      ) : tripPossible ? (
        <div>
          <SearchResults trips={currentTrips} />
          <Pagination
            tripsPerPage={tripsPerPage}
            totalTrips={trips.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default App;
