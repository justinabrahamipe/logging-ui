import axios from "axios";

export default function apiReqExecutor( setData ) {
  axios.get("http://localhost:4000" + "/activities").then((data) => {
    console.log(data);
    setData(data);
  });
}
