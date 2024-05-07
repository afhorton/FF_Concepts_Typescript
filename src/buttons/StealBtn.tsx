interface StealBtnProps {
  handleStealClick: () => void;
}


export default function StealBtn ({handleStealClick}: StealBtnProps) {
    return (
        <button onClick={handleStealClick}></button>
    )
}