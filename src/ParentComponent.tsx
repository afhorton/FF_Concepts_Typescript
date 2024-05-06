import {useState, useEffect} from "react";
import RoomTitle from "./RoomTitle";
import RoomText from "./RoomText";
import RightButton from "./buttons/RightButton";
import LeftButton from "./buttons/LeftButton";
import LookAroundButton from "./buttons/LookAroundBtn";
import FightBtn from "./buttons/FightBtn";
import PlayerStatsDisplay from "./PlayerStatsDisplay";
import EnemyFightScreen from "./EnemyFightScreen";

function ParentComponent() {

  // The current coordinate of the player.
  const [coordinate, setCoordinate] = useState<string>("");

  // Determines if there is a fight occurance in the room.
  const [isFight, setIsFight] = useState<boolean>(false);

 // Determines if the player is currently fighting. 
  const [isFighting, setIsFighting] = useState<boolean>(false);

  // The Player
  const [Player, setPlayer] = useState({
    HP: 100,
    MP: 100,
    GD: 100
  });

  // Enemy interface 
  interface Enemy {
    name: string;
    HP: number;
    MP: number;
    GD: number;
  }

  // The Enemy
  const [enemy, setEnemy] = useState<Enemy>('');
   
  const DefaultBoy: Enemy = {
    name: "Default Boy",
    HP: 10,
    MP: 10,
    GD: 10,
  };

  const MutantOrc: Enemy = {
    name: 'Mutant Orc',
    HP: 50,
    MP: 100,
    GD: 40
  }

  const FeralChimera: Enemy = {
    name: 'Feral Chimera',
    HP: 60,
    MP: 100,
    GD: 20
  }

  // Weapons data
  interface Weapon {
    name: string;
    damage: number;
  }

  const Saber: Weapon = {
    name: 'Saber',
    damage: 10,
  }

  // Sets Enemy
  const setEnemyType = (coordinate: string) => {
    switch (coordinate) {
      case "A1":
        setEnemy(MutantOrc);
        break;
      case "A2":
        setEnemy(DefaultBoy);
        break;
      case "B1":
        setEnemy(DefaultBoy);
        break;
      case "B2":
        setEnemy(FeralChimera);
        break;
      default:
        setEnemy(DefaultBoy);
    }
  }



  const lookAround = (coordinate: string) => {
       switch (coordinate) {
         case "A1":
           setIsFight(true);
           setEnemyType(coordinate);
           break;
         case "A2":
           setIsFight(false);
           break;
         case "B1":
           setIsFight(false);
           break;
         case "B2":
           setIsFight(true);
           setEnemyType(coordinate);
           break;
         default:
           setIsFight(false);
       }
  }

  // Console.log enemy.name
  useEffect(
    () => {
      if (enemy) {
        console.log(enemy.name);
      }
    }, [enemy]
  );

  // Sets isFight back to 'false' everytime player changes rooms.
  useEffect(() => {
    setIsFight(false);
  }, [coordinate]);

  const handleLookAround = () => {
    lookAround(coordinate);
  }

  const handleFightClick = () => {
    setIsFighting(true);

    setTimeout(
      () => { setIsFighting(false);
      setIsFight(false);
      }, 1000
    );
  };



  const handleRightClick = () => {
    switch (coordinate) {
      case "A1":
        setCoordinate("A2");
        break;
      case "A2":
        setCoordinate("B2");
        break;
      case "B1":
        setCoordinate("B2");
        break;
      case "B2":
        setCoordinate("A2");
        break;
      default:
        setCoordinate("A1");
    }
  } 

  const handleLeftClick = () => {
    // Update the coordinate state based on its current value.
    switch (coordinate) {
      case "A1":
        setCoordinate("B1");
        break;
      case "A2":
        setCoordinate("A1");
        break;
      case "B1":
        setCoordinate("A1");
        break;
      case "B2":
        setCoordinate("B1");
        break;
      default:
        setCoordinate("B1");
    }
  }; 
  // const handleCoordinateChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const value = String(event.target.value);
  //   setCoordinate(value);
  // };



  return (
    <>
      <h1>Fighting Fantasy</h1>
      {/* <input
        type="text"
        value={coordinate}
        placeholder="Put them here."
        onChange={handleCoordinateChange}
      /> */}
      <PlayerStatsDisplay HP={Player.HP} MP={Player.MP} GD={Player.GD} />
      <RoomTitle coordinate={coordinate} enemyName={enemy ? enemy.name: ''} isFight={isFight}/>
     {isFight ? <EnemyFightScreen enemy={enemy} /> :
      <RoomText coordinate={coordinate} isFighting={isFighting} /> }
      <RightButton
        coordinate={coordinate}
        handleRightClick={handleRightClick}
        isFight={isFight}
      />
      <LeftButton
        coordinate={coordinate}
        handleLeftClick={handleLeftClick}
        isFight={isFight}
      />
      <LookAroundButton handleLookAround={handleLookAround} isFight={isFight} />
      <FightBtn isFight={isFight} handleFightClick={handleFightClick} />
      {/* <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1> */}
    </>
  );
}

export default ParentComponent;