interface SapBtnProps {
  handleSapClick: () => void;
}

export default function SapBtn ({handleSapClick}: SapBtnProps) {
    return (
        <>
        <button onClick={handleSapClick} >Sap</button>
        </>
    )

};