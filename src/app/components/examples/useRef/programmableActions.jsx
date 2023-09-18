import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    /* патерны применения хука useRef (вместо поиска по id) */

    const handleClickFocus = () => {
        console.log(inputRef.current);
        inputRef.current.focus(); // применяем функцию к компоненту
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "350px"; // управляем стилями компонента
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button
                className="btn btn-sm btn-primary mt-2"
                onClick={handleClickFocus}
            >
                Сфокусироваться на input
            </button>
            <button
                className="btn btn-sm btn-primary mt-2 mx-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
