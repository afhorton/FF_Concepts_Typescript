import {useState} from "react";
import RoomTitle from "./RoomTitle";
import RoomText from "./RoomText";
import RightButton from "./buttons/RightButton";
import LeftButton from "./buttons/LeftButton";
import LookAroundButton from "./buttons/LookAroundBtn";
import FightBtn from "./buttons/FightBtn";

function ParentComponent() {

  // The current coordinate of the player.
  const [coordinate, setCoordinate] = useState<string>("");

  // Determines if there is a fight occurance in the room.
  const [isFight, setIsFight] = useState<boolean>(false);

 // Determines if the player is currently fighting. 
  const [isFighting, setIsFighting] = useState<boolean>(false);


  const lookAround = (coordinate: string) => {
       switch (coordinate) {
         case "A1":
           setIsFight(true);
           break;
         case "A2":
           setIsFight(false);
           break;
         case "B1":
           setIsFight(false);
           break;
         case "B2":
           setIsFight(true);
           break;
         default:
           setIsFight(false);
       }
  }

  const handleLookAround = () => {
    lookAround(coordinate);
  }

  const handleFightClick = () => {
    setIsFighting(true);

    setTimeout(
      () => { setIsFighting(false);}, 10000
    );
  };



  const handleRightClick = () => {
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
      <LookAroundButton  handleLookAround={handleLookAround}/>
      {/* <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1> */}

    </>
  );
}

export default ParentComponent;