import {useState} from "react";

export default function getRoom (coordinate: string) : string {
    let room : string;

    switch(true) {
        case coordinate == "A1":
            room = "The Sanctuary";
            break;
        case coordinate == "A2":
            room = "The Living Rocks";
            break;
        case coordinate == "B1":
            room = "The Lair of Swords";
            break;
        case coordinate == "B2":
            room = "Heaven of the Blind";
            break;
        default:
            room = "Not a valid coordinate"
    }
    return room;
}

function RoomMovement() {
    const [coordinate, setCoordinate] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    const handleGetRoom = () => {
        setRoom(getRoom(coordinate))
    }

    const handleCoordinateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = String(event.target.value);
        setCoordinate(value);
    }

    return (
        <>
        <h1>Put in your Coordinates</h1>
        <input type="text" value={coordinate} placeholder="Put them here." onChange={handleCoordinateChange}/>
        <button onClick={handleGetRoom}>Find out where you are.</button>
        <h1>You are in {room}</h1>       
        </>
    )
}

// function RoomMovement() {
//     const [coordinate, setCoordinate] = React.useState("A1");
//     const [room, setRoom] = React.useState(getRoom(coordinate));

//     return (
//         <>
//             <h1>Room Movement</h1>
//             <div className="card">
//                 <p>Current Room: {room}</p>
//                 <button onClick={() => {
//                     setCoordinate("A1");
//                     setRoom(getRoom("A1"));
//                 }}>
//                     Move to A1
//                 </button>
//                 <button onClick={() => {
//                     setCoordinate("A2");
//                     setRoom(getRoom("A2"));
//                 }}>
//                     Move to A2
//                 </button>
//                 <button onClick={() => {
//                     setCoordinate("B1");
//                     setRoom(getRoom("B1"));
//                 }}>
//                     Move to B1
//                 </button>
//                 <button onClick={() => {
//                     setCoordinate("B2");
//                     setRoom(getRoom("B2"));
//                 }}>
//                     Move to B2
//                 </button>
//             </div>
//         </>
//     )
// }