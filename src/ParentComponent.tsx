import {useState} from "react";
import RoomTitle from "./RoomTitle";
import RoomText from "./RoomText";
import RightButton from "./buttons/RightButton";
import LeftButton from "./buttons/LeftButton";

function ParentComponent() {
  const [coordinate, setCoordinate] = useState<string>("");
//   const [room, setRoom] = useState<string>("");

//   const handleGetRoom = () => {
//     setRoom(getRoom(coordinate));
//   };

  const handleRightClick = () => {
    // Update the coordinate state based on its current value.
    switch (coordinate) {
      case "A1":
        setCoordinate("A2");
        break;
      case "A2":
        setCoordinate("B2");
        break;
      case "B1":
        setCoordinate("B2");
        break;
      case "B2":
        setCoordinate("A2");
        break;
      default:
        setCoordinate("A1");
    }
  } 

  const handleLeftClick = () => {
    // Update the coordinate state based on its current value.
    switch (coordinate) {
      case "A1":
        setCoordinate("B1");
        break;
      case "A2":
        setCoordinate("A1");
        break;
      case "B1":
        setCoordinate("A1");
        break;
      case "B2":
        setCoordinate("B1");
        break;
      default:
        setCoordinate("B1");
    }
  }; 
  // const handleCoordinateChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const value = String(event.target.value);
  //   setCoordinate(value);
  // };

  return (
    <>
      <h1>Fighting Fantasy</h1>
      {/* <input
        type="text"
        value={coordinate}
        placeholder="Put them here."
        onChange={handleCoordinateChange}
      /> */}
      <RoomTitle coordinate={coordinate} />
      <RoomText coordinate={coordinate} />
      <RightButton coordinate={coordinate} handleRightClick={handleRightClick} />
      <LeftButton coordinate={coordinate} handleLeftClick={handleLeftClick} />
      {/* <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1> */}

    </>
  );
}

export default ParentComponent;