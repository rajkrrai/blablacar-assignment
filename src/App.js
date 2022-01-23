import React, { useState, useEffect } from "react";
import "./App.css";
import SearchResults from "./components/stateless/SearchResults";
import moment from "moment";
import Spinner from "./components/stateless/Spinner";
import NoResult from "./components/stateless/NoResult";
import FetchRideDetails from "./services/RideFetchingService";

function App() {
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [trips, setTrips] = useState([]);
  const [tripPossible, setTripPossible] = useState(null);
  const [nextCursorArr] = useState([null]);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevbtn, setDisablePrevbtn] = useState(false);
  const [currPageIndex, setCurrPageIndex] = useState(0);

  let today = new Date();
  today = moment(today).format("D, MMMM"); //get current date in 23, January format

  useEffect(() => {
    const fetchMyRide = async () => {
      try {
        setLoading(true);
        let res = await FetchRideDetails();
        let newSerchObj = res.data;
        newSerchObj.currpage = currPageIndex;
        populateStateFromData(newSerchObj);
      } catch (err) {
        setLoading(false);
        console.log(err);
        throw new Error("Something went wrong...!");
      }
    };
    fetchMyRide();
  }, []);

  const populateStateFromData = (newSerchObj) => {
    const { count, full_trip_count } = newSerchObj.search_info;
    const availableRides = count - full_trip_count;
    const { trips, next_cursor, currpage } = newSerchObj;
    console.log(currpage);

    //if trip is available set trip array,tripossible=true and msg to user else tripossible=false and revelant msg
    if (trips.length > 0) {
      setTripPossible(true);
      setTrips(trips);
      setResultMsg(
        `${availableRides} out of ${count} rides are available now.`
      );
    } else {
      setTripPossible(false);
      setResultMsg("No Rides Available");
    }

    // if next_cursor is available store in the state array and enable next button
    if (next_cursor) {
      nextCursorArr.push(next_cursor);
      setDisableNextBtn(false);
    } else {
      setDisableNextBtn(true);
    }

    // based on currpage =0 disable previous button, else enable it
    if (currpage === 0 || currpage === -1) {
      setDisablePrevbtn(true);
    } else {
      setDisablePrevbtn(false);
    }
    setLoading(false);
  };

  const goToNextPage = async (e) => {
    try {
      let currpage = currPageIndex + 1;
      setLoading(true);
      let res = await FetchRideDetails(nextCursorArr[currpage]);
      let newSerchObj = res.data;
      newSerchObj.currpage = currpage;
      populateStateFromData(newSerchObj);
      setCurrPageIndex(currpage);
      console.log("current pg index on next", currPageIndex);
    } catch (error) {
      setLoading(false);
      throw new Error("Something went wrong...!");
    }
  };

  const goToPrevPage = async () => {
    try {
      let currpage = currPageIndex - 1;
      let res = await FetchRideDetails(nextCursorArr[currpage]);

      let newSerchObj = res.data;
      newSerchObj.currpage = currpage;
      populateStateFromData(newSerchObj);
      setCurrPageIndex(currpage);
      console.log("current pg index prev", currPageIndex);
    } catch (error) {
      setLoading(false);
      console.log(error);
      throw new Error("Something went wrong...!");
    }
  };

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
          <SearchResults trips={trips} />
          <div className="align-button">
            <button
              className="btn btn-primary mr-3"
              onClick={goToPrevPage}
              disabled={disablePrevbtn}
            >
              Previous
            </button>
            <button
              id="nextbtn"
              className="btn btn-success"
              onClick={goToNextPage}
              disabled={disableNextBtn}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default App;
