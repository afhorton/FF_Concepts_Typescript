import RoomMovement2 from "./RoomMovement2";
import { useState } from "react";


export default function ParentComponent() {
  const [coordinate, setCoordinate] = useState<string>("");

  return (
    <>
      <RoomMovement2 coordinate={coordinate} setCoordinate={setCoordinate} />
    </>
  );
}
