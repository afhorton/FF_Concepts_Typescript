import {useState, useEffect} from "react";
import RoomTitle from "./RoomTitle";
import RoomText from "./RoomText";
import RightButton from "./buttons/RightButton";
import LeftButton from "./buttons/LeftButton";
import LookAroundButton from "./buttons/LookAroundBtn";
import FightBtn from "./buttons/FightBtn";
import PlayerStatsDisplay from "./PlayerStatsDisplay";
import EnemyFightScreen from "./EnemyFightScreen";
import AttackBtn from "./buttons/AttackBtn";
import SapBtn from "./buttons/SapBtn";
import StealBtn from "./buttons/StealBtn";


function ParentComponent() {

  // The current coordinate of the player.
  const [coordinate, setCoordinate] = useState<string>("");

  // Determines if there is a fight occurance in the room.
  const [isFight, setIsFight] = useState<boolean>(false);

 // Determines if the player is currently fighting. 
  const [isFighting, setIsFighting] = useState<boolean>(false);

  // See the below: It is useful to note for later.
//   const [Player, setPlayer] = useState({
//   HP: 100,
//   MP: 100,
//   GD: 100,
//   weapon: null as Weapon | null, // Player starts with no weapon
// });

  // Enemy interface 
  interface Enemy {
    name: string;
    HP: number;
    MP: number;
    GD: number;
    DEX: number;
  }

  // Types of Enemies
   
  const DefaultBoy: Enemy = {
    name: "Default Boy",
    HP: 999,
    MP: 999,
    GD: 999,
    DEX: 999
  };

  class MutantOrc implements Enemy {
    name = 'Mutant Orc';
    HP = 50;
    MP = 100;
    GD = 40;
    DEX = 4;
  }

  class FeralChimera implements Enemy {
    name = 'Feral Chimera';
    HP = 60;
    MP = 100;
    GD = 20;
    DEX = 4;
  }

  // The Enemy
  const [enemy, setEnemy] = useState<Enemy | null>(null);

  // Weapons data
  interface Weapon {
    name: string;
    damage: number;
  }

  const Saber: Weapon = {
    name: 'Saber',
    damage: 6,
  }

  //Equip Weapon
  // Use later.
  const equipWeapon = (newWeapon: Weapon) => {
    setPlayer(prevPlayer => ({
      ...prevPlayer, 
      weapon: newWeapon,
    }));
  };

  // Sets Enemy
  const setEnemyType = (coordinate: string) => {
    switch (coordinate) {
      case "A1":
        setEnemy(new MutantOrc);
        break;
      case "A2":
        setEnemy(null);
        break;
      case "B1":
        setEnemy(null);
        break;
      case "B2":
        setEnemy(new FeralChimera);
        break;
      default:
        setEnemy(null);
    }
  }

  // Dice roll function
  const diceRoll = (die: number) => {
    return Math.floor(Math.random() * die)
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

    // setTimeout(
    //   () => { setIsFighting(false);
    //   setIsFight(false);
    //   }, 1000
    // );
  };

  // IsFighting functions for Buttons
  const handleAttackClick = () => {
    if (enemy && Player.weapon) {
      const newEnemyHP = enemy.HP - ( diceRoll(20) + Player.weapon.damage);
    

    if (newEnemyHP <= 0) {
      setEnemy(null);
      setIsFighting(false);
      setIsFight(false);
    } else {
      setEnemy({...enemy, HP: newEnemyHP})
    }
  }
  };

  // Sap Logic
   const handleSapClick = () => {
     if (enemy && Player.sapStr) {
       const newEnemyMP = enemy.MP - (diceRoll(6) + Player.sapStr);
       let newPlayerMP;

       if (newEnemyMP < 0) {
        newPlayerMP = Player.MP + enemy.MP;
        setEnemy({...enemy, MP: 0});
       } else {
        newPlayerMP = Player.MP + Player.sapStr;
        setEnemy({ ...enemy, MP: newEnemyMP });
       }
       setPlayer({ ...Player, MP: newPlayerMP });
     }
   };

   // Steal logic

   const handleStealClick = () => {
      if (enemy && Player.DEX) {
        if (enemy.DEX < Player.DEX) {
          const newEnemyGD = enemy.GD - diceRoll(20);
          let newPlayerGD: number;

          if (newEnemyGD < 0) {
            newPlayerGD = Player.GD + enemy.GD;
            setEnemy({...enemy, GD: 0});
          } else {
            newPlayerGD = Player.GD + diceRoll(20);
            setEnemy({...enemy, GD: newEnemyGD})
          }
          setPlayer({...Player, GD: newPlayerGD});
        }
      }
   }

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

    // The Player
  const [Player, setPlayer] = useState({
    HP: 100,
    MP: 100,
    GD: 100,
    weapon: Saber,
    sapStr: 5,
    DEX: 5
  });



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
     {isFight ? <EnemyFightScreen enemy={enemy ? enemy: null} /> :
      <RoomText coordinate={coordinate} isFighting={isFighting} /> }
      {isFighting ? <SapBtn handleSapClick={handleSapClick} /> : <RightButton
        coordinate={coordinate}
        handleRightClick={handleRightClick}
        isFight={isFight}
      />}
      {isFighting ? <StealBtn handleStealClick={handleStealClick} /> :
      <LeftButton
        coordinate={coordinate}
        handleLeftClick={handleLeftClick}
        isFight={isFight}
      />}
      <LookAroundButton handleLookAround={handleLookAround} isFight={isFight} />
      {isFighting ? 
      <AttackBtn handleAttackClick={handleAttackClick} />:
      <FightBtn isFight={isFight} handleFightClick={handleFightClick} />}
      {/* <button onClick={handleGetRoom}>Find out where you are.</button>
      <h1>You are in {room}</h1> */}
    </>
  );
}

export default ParentComponent;