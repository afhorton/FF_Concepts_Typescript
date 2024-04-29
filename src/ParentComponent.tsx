import {useState} from "react";
import RoomTitle from "./RoomTitle";
import RoomText from "./RoomText";

function ParentComponent() {
  const [coordinate, setCoordinate] = useState<string>("");
//   const [room, setRoom] = useState<string>("");

//   const handleGetRoom = () => {
//     setRoom(getRoom(coordinate));
//   };

  const handleCoordinateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = String(event.target.value);
    setCoordinate(value);
  };

  return (
    <>
      <h1>Put in your Coordinates</h1>
      <input
        type="text"
        value={coordinate}
        placeholder="Put them here."
        onChange={handleCoordinateChange}
      />
      <RoomTitle coordinate={coordinate} />
      <RoomText coordinate={coordinate} />
      {/* <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1> */}

    </>
  );
}

export default ParentComponent;