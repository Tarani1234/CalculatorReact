import { useState } from "react";
import styles from "./App.module.css";
import Buttoncontainer from "./Buttonscontainer";

import Display from "./Display";

function App() {
  const [calval, setval] = useState("45");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
        setval("");
    }
    
     else if (buttonText === "=") {
      const result =eval(calval);
      setval(result);
    } else {
      const newvalue = calval + buttonText;
      setval(newvalue);
    }
  };
  return (
    <div className={styles.Calculator}>
      <Display displayvalue={calval}></Display>
      <Buttoncontainer onButtonClick={onButtonClick}></Buttoncontainer>
    </div>
  );
}

export default App;
