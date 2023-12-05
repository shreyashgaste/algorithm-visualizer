/* eslint-disable react/style-prop-object */
import "./NumberBlock.css";

interface NumberProps {
  num: number;
  style?: any;
}

function Number({ num, style }: NumberProps) {
  return (
    <div className="number-container" style={{...style}}>
      <div className="number-block">{num}</div>
    </div>
  );
}

export default Number;
