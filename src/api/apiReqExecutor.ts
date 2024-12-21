import axios from "axios";

export default function apiReqExecutor( route:string ,setData) {
  axios.get("http://localhost:4000/" + route).then((data) => {
  console.log(data);
  setData (data?.data);
  });
}
