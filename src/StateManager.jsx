import { useState } from "react";
import { getAPI } from "./AxiosCall";

const StateManager = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const changeEvent = (e) => {
    setUserName(e.target.value);
  };

  const onClickEvent = async (e, a) => {
    console.log("onClickEventProps");
    console.dir(a);
    try {
      e.preventDefault();
      const response = await getAPI(userName);
      console.dir(response);
      a.onSubmit(response.data);
      setError(null);
      setUserName("");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return { userName, changeEvent, onClickEvent };
};
export default StateManager;
// export {changeEvent, onClickEvent}
