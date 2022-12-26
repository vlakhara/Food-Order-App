import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import style from "./Model.module.css";

const BackDrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const portalEle = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClose} />, portalEle)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalEle
      )}
    </Fragment>
  );
};

export default Model;
