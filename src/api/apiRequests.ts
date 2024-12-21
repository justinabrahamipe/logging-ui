import apiReqExecutor from "./apiReqExecutor";

export  function getLog(setData:any) {
const data = apiReqExecutor('log',setData);
setData (data);}

export  function getActivitiesList(setData:any) {
    const data = apiReqExecutor('activities',setData);
    setData (data);}
  