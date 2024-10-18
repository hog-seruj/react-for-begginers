import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "../state/cellsate";

type cellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const cellStateMap = {
  [WATER]: '',
  [SHIP]: '',
  [CHECKED_WATER]: '🌊',
  [CHECKED_SHIP]: '🔥',
};

const Cell = ({handleClick, value, x, y}: cellProps) => {
  return <button className="battle-field__cell" type="button" onClick={() => handleClick(y, x)}>
    {cellStateMap[value as keyof typeof cellStateMap]}
  </button>;
};

type BattleFieldProps = {
  matrix: number[][];
  onFire: (x: number, y:number) => void;
};

export const BattleField = ({matrix, onFire}: BattleFieldProps) => {
  return <div className="battle-field">
    {matrix.map((line, lineNumber) => (
      <div className="battle-field__line" key={lineNumber}>
        {line.map((v, i) => (
          <Cell
            key={`${lineNumber}${i}`}
            value={v}
            y={lineNumber}
            x={i}
            handleClick={onFire}
          />
        ))}
      </div>
    ))}
  </div>;
};
