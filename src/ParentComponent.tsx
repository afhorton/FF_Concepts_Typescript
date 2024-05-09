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
    maxHP: number;
    HP: number;
    maxMP: number;
    MP: number;
    GD: number;
    DEX: number;
  }

  // Types of Enemies
   
  const DefaultBoy: Enemy = {
    name: "Default Boy",
    maxHP: 999,
    HP: 999,
    MP: 999,
    maxMP: 999,
    GD: 999,
    DEX: 999,
  };

  class MutantOrc implements Enemy {
    name = "Mutant Orc";
    maxHP = 50;
    HP = 50;
    maxMP = 100;
    MP = 100;
    GD = 40;
    DEX = 4;
  }

  class FeralChimera implements Enemy {
    name = "Feral Chimera";
    maxHP = 60;
    HP = 60;
    maxMP = 100;
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

//   function enemyTurn(enemy: Enemy, player: Player) {
//   if (enemy.HP < 20) {
//     // If the enemy's HP is low, they choose to heal
//     enemy.HP += 10;
//   } else if (player.HP < 50) {
//     // If the player's HP is low, the enemy chooses to attack
//     player.HP -= enemy.weapon.damage;
//   } else {
//     // Otherwise, the enemy chooses a random action
//     const actions = ['attack', 'heal'];
//     const action = actions[Math.floor(Math.random() * actions.length)];

//     if (action === 'attack') {
//       player.HP -= enemy.weapon.damage;
//     } else {
//       enemy.HP += 10;
//     }
//   }
// }

  const desperationAttack = () => {
    const attackCount = Math.random() < 2/3 ? 2 : 3;

    for (let i = 0; i < attackCount; i++) {
      setTimeout(
        () => {
          const damage = diceRoll(6);
          setPlayer(
            prevPlayer => ({...prevPlayer, HP: prevPlayer.HP - damage})
          );
        }, i * 2000
      );
    }
  }

  const criticalHit = (die: number, percentage: number): number => {
    console.log("It's a critical hit!");
    return diceRoll(die) * percentage;
  }

  const enemyAttack = (percentage: number) => {
    const damage = Math.random() < percentage ? diceRoll(6): criticalHit(6, 2.5);
    setPlayer(prevPlayer => ({...prevPlayer, HP: prevPlayer.HP - damage}));
  }

   const unDeadAttack = (percentage: number) => {
     const damage =
       Math.random() < percentage ? diceRoll(6) : criticalHit(6, 2.5);
     return damage;
   };
  // const enemyTurn = () => {

  // }

  const heal = (healAmount: number) => {
    if (healAmount < 0 || healAmount > 1) {
      console.error('healAmount must be a percentage (between 0 and 1).');
      return;
    }
    if (enemy) {
      const healValue = enemy.maxHP * healAmount;
      setEnemy(prevEnemy => prevEnemy ? {...prevEnemy, HP: prevEnemy.HP + healValue}: null);
    } else {
      const healValue = Player.maxHP * healAmount;
      setPlayer(prevPlayer => ({...prevPlayer, HP: prevPlayer.HP + healValue}))
    }

  }

  const wildBeastAI = () => {
    if (enemy && enemy.HP <= enemy.maxHP * 0.25) {
      desperationAttack();
    } else {
      enemyAttack(0.75);
    }
  }



  const unDeadHealingFactor= () => {
     if (enemy && enemy.MP >= enemy.maxMP * 0.75) {
       heal(0.15);
     } else if (
       enemy &&
       enemy.MP >= enemy.maxMP * 0.5 &&
       enemy.MP < enemy.maxMP * 0.75
     ) {
       heal(0.1);
     } else if (
       enemy &&
       enemy.MP >= enemy.maxMP * 0.25 &&
       enemy.MP < enemy.maxMP * 0.5
     ) {
       heal(0.05);
     } else {
       heal(0);
     }
  }

  const unDeadAI = () => {
    let damage: number;
    if (enemy && enemy.MP >= enemy.maxMP * 0.75) {
      damage = Number(unDeadAttack(0.75)) + 10;
      unDeadHealingFactor();
    } else if (
      enemy &&
      enemy.MP >= enemy.maxMP * 0.5 &&
      enemy.MP < enemy.maxMP * 0.75
    ) {
      damage = Number(unDeadAttack(0.75)) + 5;
      unDeadHealingFactor();
    } else if (
      enemy &&
      enemy.MP >= enemy.maxMP * 0.25 &&
      enemy.MP < enemy.maxMP * 0.5
    ) {
      damage = Number(unDeadAttack(0.75));
      unDeadHealingFactor();
    } else {
      console.log(enemy ? enemy.name + " lies still." : "No enemy found.");
    }
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      HP: prevPlayer.HP - damage,
    }));
  };

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
    return Math.floor(Math.random() * die) + 1
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
    maxHP: 100,
    HP: 100,
    maxMP: 100,
    MP: 100,
    GD: 100,
    weapon: Saber,
    sapStr: 5,
    DEX: 5,
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