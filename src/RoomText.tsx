function getRoomText (coordinate: string, isFighting: boolean) : string { 
      let text: string;

      if (!isFighting) {
      switch (true) {
        case coordinate == "A1":
          text = "Angelic singing.  The howling of souls.";
          break;
        case coordinate == "A2":
          text = "The very stones scream like the damned.";
          break;
        case coordinate == "B1":
          text = "Blade grow from the very walls.  Which will you choose?";
          break;
        case coordinate == "B2":
          text = "Blackness.  Total blackness.";
          break;
        default:
          text = "Angelic singing.  The howling of souls.";
      }
      return text;
    } else {
      text = "You are fighting."
      return text;
    }

}

interface RoomTextProps {
    coordinate: string;
    isFighting: boolean;
}

export default function RoomText ({coordinate, isFighting}: RoomTextProps) {
    const text = getRoomText(coordinate, isFighting);

    return (
        <>
        <p><i>{text}</i></p>
        </>
    )
}