import axios from "axios";
import moment from "moment";
import runtimeEnv from "@mars/heroku-js-runtime-env";
let today = new Date();
today = moment(today).format("D, MMMM");
let apiDate = moment.parseZone(today).local(true).format().split("+")[0]; //2022-01-21T12:00:00

let FetchRideDetails = async () => {
  const env = runtimeEnv();
  console.log(env.REACT_APP_APIKEY);
  //   return axios.get(
  //     `https://public-api.blablacar.com/api/v3/trips?key=${process.env.REACT_APP_APIKEY}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&currency=EUR&start_date_local=${apiDate}&count=100`
  //   );
  return axios.get(
    `https://public-api.blablacar.com/api/v3/trips?key=${env.REACT_APP_APIKEY}&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&currency=EUR&start_date_local=2022-01-23T12:00:00&count=100`
  );
};

export default FetchRideDetails;
