interface FightBtnProps {
  isFight: boolean;
  handleFightClick: () => void;
}

// Fix this.  It needs to know if isFighting.

export default function FightBtn( {isFight, handleFightClick} : FightBtnProps) {
    return (
        <>
        <button onClick={handleFightClick} disabled={!isFight}>Fight</button>
        </>
    )
}