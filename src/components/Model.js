import React, { Component } from 'react';

function Model(props) {
  let modelStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.0)',
  };
  return (
    <div className="modal show fade" style={modelStyle}>
      {console.log('>>', props)}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.hide}
            ></button>
          </div>
          <div className="modal-body">
            {/* <div
                style={{
                  backgroundImage: `url(${this.props.profileImageUrl})`,
                }}
              /> */}
            <img src={props.profileImageUrl} width="100" height="100" />
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.jobTitle}</p>
            <p>{props.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Model;
