import React from 'react';
import classes from "../../style/Card.module.scss";

const Card = (props: any) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
