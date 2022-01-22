import nores from "../../assets/noResultFound.svg";
export const NoResult = () => {
  return (
    <div className="nores">
      <img src={nores} alt="No Result found" />
      <br />
    </div>
  );
};

export default NoResult;
