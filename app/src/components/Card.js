import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCard } from './../actions'



const Card = (props) => {

    const handleFetchCard = () => {
        props.fetchCard()
    }
    
    useEffect (() => {
        fetchCard()
    }, [])

    return (
        <>
            <div>
                <h2>Pick a random MTG card!</h2>
                <img src={props.card.imageUrl} alt="mtg-card"/>
                <div>
                    <button onClick={handleFetchCard}>New Random Card!</button>

                </div>
                <h3>{props.card.name}</h3>
                <h4>{props.card.manaCost}</h4>
                <h4>{props.card.originalType}</h4>
                <h3 id="originalText">{props.card.originalText}</h3>
                
            </div>
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