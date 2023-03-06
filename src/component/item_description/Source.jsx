import React from "react";
import sourceNameProperties from "../../data/localization/source_name.json"
import sourceLocalization from "../../data/localization/source.json"

const Souce = ({ source }) => {
    const translateSource = (source) => {
        const sourceProperties =  sourceNameProperties[source.name];

        return sourceProperties.translation + ", " + sourceLocalization[source[sourceProperties.property].toString()];
    }

    return (
        <div className="item-source">
            <span className="subtitle">Source:</span>
            <span>{translateSource(source)}</span>
        </div>
    );
}

export default Souce;