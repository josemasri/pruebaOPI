import "./App.css";

import React, { useState } from "react";

import Button from "./Button.jsx";
import { Loading } from "./Loading";
import Map from "./Map";
import { getGeolocationPoints } from "./api/cartoSql";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const data = await getGeolocationPoints();
      setData(data.rows);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert(JSON.stringify(error));
    }
  };

  return (
    <div id="app">
      <Map zoom={5} lat={19.453603} lng={-99.14041} data={data} setIsLoading={setIsLoading} />
      {<>{isLoading && <Loading />}</>}
      <Button onClick={onClick} isDisabled={data.length > 0} />
    </div>
  );
}

export default App;
