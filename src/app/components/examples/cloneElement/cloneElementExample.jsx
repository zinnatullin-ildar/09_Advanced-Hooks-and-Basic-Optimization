import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
import Divider from "../../common/divider";

const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;

    const handleChange = (target) => {
        console.log("change: ", target);
    };

    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            <Divider />
            {field}
            {/* склонированный элемент с добавленными и измененными props (название у label совпадает, поэтому он и применится) */}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
