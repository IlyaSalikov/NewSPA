import React from 'react';

const Form = () => {
    return (
        <div className={"weather-form"}>
            <form action="">
                <input type="text" name={"city"} placeholder={"Введите город"}/>
                <button>Узнать погоду</button>
            </form>
        </div>
    );
};

export default Form;