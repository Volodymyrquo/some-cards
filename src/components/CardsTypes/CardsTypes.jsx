import React from 'react';
import { connect } from 'react-redux';
import { getCardTypesList } from '../../redux/cardTypes-reducer';

const CardsType = (props) => {
  return (
    <div>
      <h1>Hello from CardsType...</h1>
      <button onClick={() => props.getCardTypesList(20, 1)}>
        Get cards type list
      </button>
      {props.cardTypesList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardTypesList: state.cardTypes.cardTypesList,
});

export default connect(mapStateToProps, { getCardTypesList })(CardsType);
