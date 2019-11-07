import React from "react";

function PageContent(props) {
  return (
    <div className="page-content">
      <div className="passages">
        <p>{props.passages}</p>
      </div>
    </div>
  );
}

export default PageContent;
