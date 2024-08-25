import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

const Loading = () => {
    <ClipLoader
        color="#ffffff"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
  />
}

export default Loading