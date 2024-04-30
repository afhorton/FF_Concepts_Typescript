// import {useState} from "react";
// import {useEffect} from "react";


function GetRoom (coordinate: string) : string {
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
            room = "Blind Man's Heaven";
            break;
        default:
            room = "Not a valid coordinate"
    }
    return room;
}

interface RoomTitleProps {
    coordinate: string;
}

export default function RoomTitle ({coordinate}: RoomTitleProps) {
    // const [room, setRoom] = useState<string>("");
    const room = GetRoom(coordinate);

    // useEffect( () => {
    //     setRoom(GetRoom(coordinate));
    // }, [coordinate])
    
    return (
        <>
        <h1>{room}</h1>
        </>
    )
}