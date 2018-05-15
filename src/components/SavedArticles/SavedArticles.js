import React from "react";

const SavedArticles = props => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><a href={props.url}>{props.url}</a></p>
            <button classNameName="btn btn-primary" id="remove-article">Remove</button>
        </div>
    </div>
)

export default SavedArticles;