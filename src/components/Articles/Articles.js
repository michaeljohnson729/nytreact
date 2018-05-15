import React from "react";

const Articles = props => (
    <div className="card">
        <div className="card-body">
            {props.title}
            <a href={props.url}>{props.url}</a>
            <button classNameName="btn btn-primary" id="save-article">Save</button>
        </div>
    </div>
)

export default Articles;