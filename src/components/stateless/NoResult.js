import nores from "../../assets/noResultFound.svg";
/**
 * Functional react component for displaying error or when no results are found
 * @returns {JSX.Element} - Rendered component (an image with no result found)
 */
export const NoResult = () => {
  return (
    <div className="nores">
      <img src={nores} alt="No Result found" />
      <br />
    </div>
  );
};

export default NoResult;
