import React from "react";

function Links(props) {
    return (
        <div id="links">
            <h3>Links</h3>
            <div>
                <strong>GitHub:</strong> <a href={props.github}>{props.github}</a>
            </div>
            <div>
                <strong>LinkedIn:</strong> <a href={props.linkedin}>{props.linkedin}</a>
            </div>
        </div>
    )
}

export default Links;
