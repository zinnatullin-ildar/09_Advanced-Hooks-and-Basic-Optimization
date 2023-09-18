import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({}); // состояние для отслеживания data
    const withOutCallback = useRef(0); // референс для подсчета рендеров при срабатывании функции без хука useCallback
    const withCallback = useRef(0); // референс для подсчета рендеров при срабатывании функции с хуком useCallback

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    /* Without Callback */
    const validateWithOutCallback = (data) => {
        console.log(data);
    }; // функция будет срабатывать при изменении data (без хука useCallback)

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]); // функция будет вызываться при каждом изменении validateWithOutCallback

    /* With Callback */
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []); // функция будет срабатывать при изменении data (с хуком useCallback)

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]); // функция будет вызываться при каждом изменении validateWithCallback

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]); // функция будет вызываться при каждом изменении data

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control w-50"
                id="email"
                name="email"
                value={data.email || ""} // лайфхак, чтобы не было ошибки с неконтрольруемым полем (когда email не задан по умолчанию)
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
