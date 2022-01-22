import axios from "axios";
import moment from "moment";

let today = new Date();
today = moment(today).format("D, MMMM");
let apiDate = moment.parseZone(today).local(true).format().split("+")[0]; //2022-01-21T12:00:00

let FetchRideDetails = async () => {
  return axios.get(
    `https://public-api.blablacar.com/api/v3/trips?key=${process.env.REACT_APP_APIKEY}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&currency=EUR&start_date_local=${apiDate}&count=100`
  );
};

export default FetchRideDetails;
