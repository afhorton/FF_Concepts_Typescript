function getRoomText (coordinate: string) : string { 
      let text: string;

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
          text = "Not a valid coordinate";
      }
      return text;

}

interface RoomTextProps {
    coordinate: string;
}

export default function RoomText ({coordinate}: RoomTextProps) {
    const text = getRoomText(coordinate);

    return (
        <>
        <p><i>{text}</i></p>
        </>
    )
}