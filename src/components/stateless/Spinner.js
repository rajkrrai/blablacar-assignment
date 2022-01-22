import spinnerImg from "../../assets/Steerwheel.gif";
const Spinner = (loading) => {
  //   console.log(loading);
  if (loading) {
    return (
      <div className="loader">
        <img src={spinnerImg} alt="Loading..." className="loaderImg" />

        <p>Please hold on while we fetch you a ride...</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
