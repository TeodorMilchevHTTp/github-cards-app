import { useState } from "react";
import { getAPI } from "./AxiosCall";

const useStateManager = (props) => {

const [userName, setUserName] = useState('');
const [error, setError] = useState('')

  const changeEvent = (e) => {
    setUserName(e.target.value)
  };

  const onClickEvent = async (e) => {
    try {
      e.preventDefault();
      const response = await getAPI(userName);
      console.dir(response)
        props.onSubmit(response.data)
        setError(null)
        setUserName('')
      
    } catch (error) {
      setError(error)
      console.log(error)
    }  
  }
}

export default useStateManager;
// export {changeEvent, onClickEvent}