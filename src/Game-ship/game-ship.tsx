import './game-ship.css';
import { BattleField } from './BattleField';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from '../state/useGameState';

const GameShip = () => {
  const { turn, reset, matrix, fire, won } = useGameState();

  if (won){
    alert('MOSCOW DOWN');
  }

  return (
    <div className="game-ship">
      <HeaderWithCounter turn={turn} />
      <BattleField matrix={matrix} onFire={fire} />
      <ResetButton reset={reset}/>
    </div>
  );
}
export default GameShip;
