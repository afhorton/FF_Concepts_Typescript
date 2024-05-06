interface AttackBtnProps {
  handleAttackClick: () => void;
}

export default function AttackBtn ({handleAttackClick}: AttackBtnProps) {
    return (
        <>
        <button onClick={handleAttackClick} >Attack</button>
        </>
    )
}