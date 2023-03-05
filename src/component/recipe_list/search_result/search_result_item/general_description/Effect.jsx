import React from "react";

const Effect = ({ effect }) => {
    const getExtra = (effect) => {
        const extraList = effect.extra.sort((a, b) => a.localeCompare(b))
            .map((extraEffect, index) => <li key={index}>{extraEffect}</li>)

        return (
            <ul>
                {extraList}
            </ul>
        );
    }

    const convertSeconds = (seconds) => {
        if (seconds > 120) {
            return seconds / 60 + " min";
        } else {
            return seconds + " sec";
        }
    }

    return (
        <div className="item-effect">
            <span className="subtitle">Effect:</span>
            {effect.duration && <div>Duration: {convertSeconds(effect.duration)}</div>}
            {effect.cooldown && <div>Cooldown: {convertSeconds(effect.cooldown)}</div>}
            {effect.extra && effect.extra.length && getExtra(effect)}
        </div>
    );
}

export default Effect;