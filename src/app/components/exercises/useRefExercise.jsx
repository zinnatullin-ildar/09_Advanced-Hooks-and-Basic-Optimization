import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const blockRef = useRef();

    const handleClick = () => {
        // console.log(blockRef.current);
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        blockRef.current.children[0].innerText = "Text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 80 и 150 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockRef}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-sm btn-secondary my-2"
                onClick={handleClick}
            >
                <small>Изменить</small>
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
