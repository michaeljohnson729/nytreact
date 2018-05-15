import React from "react";

const SearchBox = props => (
    <div className="card">
        <div className="card-header">
            Search Articles
        </div>
        <div className="card-body">
            <form classNameName="article-search">
                <div className="form-group">
                    <label for="topicInput">Topic:</label>
                    <input className="form-control" type="text" name="topic" id="topic" />
                </div>
                <div className="form-group">
                    <label for="startInput">Star Year:</label>
                    <input className="form-control" type="text" name="start-year" id="start-year" />
                </div>
                <div className="form-group">
                    <label for="endInput">End Year:</label>
                    <input className="form-control" type="text" name="end-year" id="end-year" />
                </div>
                <button classNameName="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    </div>
)

export default SearchBox;