import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
import SmallTitle from "../common/typografy/smallTitle";
import Divider from "../common/divider";

const ChildrenExercise = () => {
    const NumberInList = ({ children }) => {
        return React.Children.map(children, (child, num) => {
            // console.log(num);
            return (
                <>
                    {num + 1 + "."} {child}
                </>
            );
        });
    };

    NumberInList.propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    const Component = () => {
        return <div>Компонент списка</div>;
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <SmallTitle>Решение</SmallTitle>
            <NumberInList>
                <Component />
                <Component />
                <Component />
            </NumberInList>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
