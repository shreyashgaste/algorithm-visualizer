import "./Swap.css";
import { useState, useEffect } from "react";
import Number from "../numbers/NumberBlock";
import { generateArray } from "../../utils/AlgorithmUtils";

function Swap() {
    const [firstNumberIndex, setFirstNumberIndex] = useState<number | null>(null);
    const [secondNumberIndex, setSecondNumberIndex] = useState<number | null>(null);
    const [numbers, setNumbers] = useState<Array<number>>([]);

    useEffect(() => {
        setNumbers(generateArray(5));
    }, []);

    const handleNumberClick = (index: number) => {
        if (firstNumberIndex === index) {
            setFirstNumberIndex(null);
            return;
        }
        if (secondNumberIndex === index) {
            setSecondNumberIndex(null);
            return;
        }
        if (firstNumberIndex !== null && secondNumberIndex !== null)
            return;
        if (firstNumberIndex === null) setFirstNumberIndex(index);
        else setSecondNumberIndex(index);
    };
    return (
        <div className="swap-number-container">
            <div className="title"><span className={firstNumberIndex !== null && secondNumberIndex !== null ? "swap-btn" : ""}>{firstNumberIndex !== null && secondNumberIndex !== null ? "SWAP" : "SELECT"}</span> 2 NUMBERS</div>
            <div className="numbers">
                {numbers.map((num: number, index: number) => (
                    <span key={index} onClick={() => handleNumberClick(index)}>
                        {
                            (firstNumberIndex !== null && firstNumberIndex === index) || (secondNumberIndex !== null && secondNumberIndex === index)
                                ? <Number num={num} style={{ backgroundColor: "gray" }} /> : <Number num={num} />
                        }
                    </span>
                ))}
            </div>
            <div className="logic-block">

            </div>
        </div>
    );
}

export default Swap;
