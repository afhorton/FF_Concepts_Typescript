interface LookAroundBtnProps {
  isFight: boolean;
  handleLookAround: () => void;
}

export default function LookAroundButton ({handleLookAround, isFight}: LookAroundBtnProps) {
  return (
    <>
      <button onClick={handleLookAround} disabled={isFight}>Look Around</button>
    </>
  );
}