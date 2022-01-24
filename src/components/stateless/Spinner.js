import spinnerImg from "../../assets/Steerwheel.gif";
/**
 * Functional component: This component display a gif loader image with a message when loading set to true
 *
 */

const Spinner = (loading) => {
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
