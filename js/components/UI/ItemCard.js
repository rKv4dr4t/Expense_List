import React from 'react';

import styles from './ItemCard.module.css';

const ItemCard = (props) => {
    const classes = `${styles.card} ${props.className}`;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default ItemCard;