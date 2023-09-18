import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
} // вычисляем факториал от передаваемого числа

function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
} // функция-обертка для демострации рендеринга

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100); // состояние, при изменении которого наш компонент будет ререрндерится
    const [otherState, setOtherState] = useState(false); // состояние для изменения цвета кнопки

    const buttonColor = otherState ? "primary" : "danger";

    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    // useMemo(() => runFactorial(value), [value]);
    const fact = useMemo(() => runFactorial(value), [value]);
    // мемоизируем (кэшируем) вызов функции runFactorial(), что позволяет не вызывать повторный рендер компонента при изменении value

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={"btn mx-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
