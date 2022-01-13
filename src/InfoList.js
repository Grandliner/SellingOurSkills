import React from 'react';
import {InfoText} from "./InfoText";


const InfoList = () => {
    const deleteText = () => {
        alert('Delete text')
    }

    return (
        <div>
            <InfoText/>

            <div>
                <input className='input' type="text" placeholder="Введите Ваш никнейм"/>
                <button onClick={deleteText}>X</button>
            </div>
            <br/>
            <div>
                <input className='input' type="text" placeholder="Ваш класс"/>
                <button onClick={deleteText}>X</button>
            </div>
            <br/>
            <div>
                <input className='input' type="text" placeholder="Желаемая услуга"/>
                <button onClick={deleteText}>X</button>
            </div>
            <br/>
            <div>
                <input type="date"/>
                <button>Выберите Удобную для вас дату</button>
            </div>


        </div>);
}
export default InfoList;