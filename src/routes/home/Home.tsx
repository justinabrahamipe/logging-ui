import { useEffect, useState } from "react";
import { Logcard } from "../../components/LogCard";
import { getLog } from "../../api/apiRequests";
import { Spinner } from "flowbite-react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => (
   getLog(setData)
  ), []);
  return (    
    <div className="grid" >
      <div className="mb-4 grid-cols-12 text-center text-4xl font-bold text-zinc-100">
        <h1>Log</h1>
      </div>
      <div className="grid-cols-12">
        <div className="border-y-2 border-y-slate-700 p-2">
          <div className="p-5 text-xl font-bold text-zinc-100">Active</div>
      {data? data?.map((item) => 
         (
       <Logcard data={item}/>
        )
      ):<Spinner/>}
      </div>
      </div>
     
    </div>
  );
}
