import styles from "./Buttonscontainer.module.css";
const Buttoncontainer = ({ onButtonClick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonname) => (
        <button className={styles.buttons} onClick={()=> onButtonClick(buttonname)}>
          {buttonname}
        </button>
      ))}
    </div>
  );
};
export default Buttoncontainer;
