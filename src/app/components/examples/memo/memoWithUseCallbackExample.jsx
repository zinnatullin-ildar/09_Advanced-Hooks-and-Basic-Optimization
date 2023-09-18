import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary m-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);
// подключаем React.memo к компоненту LogOutButton и добавляем функцию сверки areEqual()

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]); // добавляем useCallback с отслеживанием зависимостей от props

    return (
        <>
            <button
                className="btn btn-primary m-2"
                onClick={() => setState(!state)}
            >
                Initiate Rerender
            </button>
            {/* <LogOutButton onLogOut={handleLogOut} /> // без React.memo */}
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};
// при поверхностной сверке React.memo фиксирует, что функция handleLogOut() с предыдущего рендера не изменилась (ссылка на нее равна предыдущей)
// это происходит потому, что эту функцию хранит useCallback(), который и позволяет произвести такое сравнение

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

export default MemoWithUseCallbackExample;
