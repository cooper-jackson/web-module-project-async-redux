import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchCard } from './../actions'
import { render } from 'react-dom';



const Card = (props) => {

    const handleFetchCard = () => {
        props.fetchCard()
    }
    
    return (
        <>
            <div>
                <h2>Pick a random MTG card!</h2>
                <img src={props.card.imageUrl} alt="mtg-card"/>
                <h3>{props.card.name}</h3>
                <h4>{props.card.manaCost}</h4>
                <h4>{props.card.originalType}</h4>
                <h3 id="originalText">{props.card.originalText}</h3>
                
            </div>
            <button onClick={handleFetchCard}>Random Card!</button>
        </>
    )
}

const mapStateToProps = state => {
  return {
    card: state.card,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchCard})(Card)
// export default Card