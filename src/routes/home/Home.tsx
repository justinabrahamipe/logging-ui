import { useEffect, useState } from "react";
import apiReqExecutor from "../../api/apiReqExecutor";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    apiReqExecutor(setData);
  }, []);

  console.log(data?.data);
  return (
    <div className="bg-slate-500">
      {data?.data?.map((item) => {
        return (
          <div>
            {item.properties.Name.title[0].plain_text ?? "N/A"}
          </div>
        );
      })}
    </div>
  );
}
