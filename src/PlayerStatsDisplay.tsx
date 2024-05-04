interface PSDProps {
    HP: number;
    MP: number;
    GD: number;
}

export default function PlayerStatsDisplay ({HP, MP, GD} : PSDProps) {
    return (
        <>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h3>HP: {HP}</h3>
            <h3>MP: {MP}</h3>
            <h3>GD: {GD}</h3>
        </div>
        </>
    )
}