import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

// Пример проверяет зарегистрирован ли пользователь
const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");

    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
