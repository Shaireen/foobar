import React, {useEffect, useState} from "react";
import Main from "./modules/Main";
import {checkInfo} from  "./modules/Rest";

function App() {
useEffect(() => {
  checkInfo(setBars);
}, [])
  useEffect(() => {
    const interval = setInterval(() => {
      checkInfo(setBars);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

      const [bars, setBars] = useState([]);
  return (
    <Main bars={bars}/>
  );
}

export default App;
