interface LookAroundBtnProps {
  coordinate: string;
  handleLookAroundClick: () => void;
}

export default function LookAroundButton ({coordinate, handleLookAroundClick}: LookAroundBtnProps) {
  const name = "Look Around";
  return (
    <>
      <button onClick={handleLookAroundClick}>{name}</button>
    </>
  );
}