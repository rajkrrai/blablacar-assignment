import axios from "axios";
import moment from "moment";
/**
 * Functional component: This component is soley used for making the api calls. It is dynamic in the sense that it takes
 *    a) the current date
 *    b) if total rides are more than 10 then next_cursor can be passed to this function to get more records. (used for pagination)
 *    c) APIKEY is stored in the .env file and then used in the function below
 */

let today = new Date();
today = moment(today).format("D, MMMM");
let apiDate = moment.parseZone(today).local(true).format().split("+")[0]; //ex: 2022-01-21T12:00:00

// based on next cursor bifurcate the api call
let FetchRideDetails = async (fromCursor) => {
  if (!fromCursor) {
    return axios.get(
      `https://public-api.blablacar.com/api/v3/trips?key=${process.env.REACT_APP_APIKEY}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=fr-FR&currency=EUR&start_date_local=${apiDate}`
    );
  } else {
    return axios.get(
      `https://public-api.blablacar.com/api/v3/trips?key=${process.env.REACT_APP_APIKEY}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=fr-FR&currency=EUR&start_date_local=${apiDate}&from_cursor=${fromCursor}`
    );
  }
};

export default FetchRideDetails;
