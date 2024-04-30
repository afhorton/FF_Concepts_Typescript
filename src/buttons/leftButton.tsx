function getButtonName(coordinate: string): string {
  let name: string;

  switch (true) {
    case coordinate == "A1":
      name = "To The Lair of Swords";
      break;
    case coordinate == "A2":
      name = "To The Santuary";
      break;
    case coordinate == "B1":
      name = "To The Sanctuary";
      break;
    case coordinate == "B2":
      name = "To The Lair of Swords";
      break;
    default:
      name = "Not a valid coordinate";
  }
  return name;
}

interface LeftButtonProps {
  coordinate: string;
  handleLeftClick: () => void;
}

export default function LefttButton({
  coordinate,
  handleLeftClick,
}: LeftButtonProps) {
  const name = getButtonName(coordinate);
  return (
    <>
      <button onClick={handleLeftClick}>{name}</button>
    </>
  );
}
