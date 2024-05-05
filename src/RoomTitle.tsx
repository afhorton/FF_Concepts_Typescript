// import {useState} from "react";
// import {useEffect} from "react";


function GetRoom (coordinate: string, isFight: boolean, enemyName: string) : string {
    let room : string;

    if (!isFight) {
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
            room = "The Sanctuary"
    } 
} else {
    room = enemyName;
}
    return room;
}

interface RoomTitleProps {
    coordinate: string;
    enemyName: string;
    isFight: boolean;
}

export default function RoomTitle ({coordinate, enemyName, isFight}: RoomTitleProps) {
    // const [room, setRoom] = useState<string>("");
    const room = GetRoom(coordinate, isFight, enemyName);

    // useEffect( () => {
    //     setRoom(GetRoom(coordinate));
    // }, [coordinate])
    
    return (
        <>
        <h1>{isFight ? enemyName : room}</h1>
        </>
    )
}