interface Enemy {
  HP: number;
  MP: number;
  GD: number;
}

interface EnemyFightScreenProps {
    enemy: Enemy | null;
}

export default function EnemyFightScreen({enemy}: EnemyFightScreenProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div></div>
        <div>
          <h3>HP:{enemy ? enemy.HP: null}</h3>
          <h3>MP:{enemy ? enemy.MP: null}</h3>
          <h3>GD:{enemy ? enemy.GD: null}</h3>
        </div>
      </div>
    </>
  );
}
