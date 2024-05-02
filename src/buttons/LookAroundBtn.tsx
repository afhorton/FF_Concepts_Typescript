interface LookAroundBtnProps {
  handleLookAround: () => void;
}

export default function LookAroundButton ({handleLookAround}: LookAroundBtnProps) {
  return (
    <>
      <button onClick={handleLookAround}>Look Around</button>
    </>
  );
}