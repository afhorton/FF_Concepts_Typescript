interface Enemy {
  HP: number;
  MP: number;
  GD: number;
}

interface EnemyFightScreenProps {
    enemy: Enemy;
}

export default function EnemyFightScreen({enemy}: EnemyFightScreenProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div></div>
        <div>
          <h3>HP:{enemy.HP}</h3>
          <h3>MP:{enemy.MP}</h3>
          <h3>GD:{enemy.GD}</h3>
        </div>
      </div>
    </>
  );
}
