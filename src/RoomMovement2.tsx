import { useState } from "react";
import getRoom from "./RoomMovement";

export default function RoomMovement2({ coordinate, setCoordinate }) {
  const [room, setRoom] = useState<string>("");

  const handleGetRoom = () => {
    setRoom(getRoom(coordinate));
  };

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
      <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1>
    </>
  );
}
