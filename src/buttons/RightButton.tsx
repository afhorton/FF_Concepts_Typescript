

function getButtonName(coordinate: string): string {
  let name: string;

  switch (true) {
    case coordinate == "A1":
      name = "To the The Living Rocks";
      break;
    case coordinate == "A2":
      name = "To Blind Man's Heaven.";
      break;
    case coordinate == "B1":
      name = "To Blind Man's Heaven";
      break;
    case coordinate == "B2":
      name = "To The Living Rocks";
      break;
    default:
      name = "Not a valid coordinate";
  }
  return name;
}

interface RightButtonProps {
  coordinate: string;
  handleRightClick: () => void;
}

export default function RightButton( {coordinate, handleRightClick}: RightButtonProps
) {
   const name = getButtonName(coordinate);
  return (
    <>
      <button onClick={handleRightClick}>{name}</button>
    </>
  );
}
