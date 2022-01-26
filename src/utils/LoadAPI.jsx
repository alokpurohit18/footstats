import { useEffect } from "react";

const LoadAPI = (props) => {
  useEffect(() => {
    fetch(props.url).then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  });

  return null;
};

export default LoadAPI;
