import React from "react";

const ResultsBox = props => (
    <div className="card">
        <div className="card-header">
            {props.boxName}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)

export default ResultsBox;