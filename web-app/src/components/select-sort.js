import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setSortingPreferenceByDate, setSortingPreferenceByScore} from "../actions/settings";

import {SET_SORTING_PREFERENCE_BY_DATE, SET_SORTING_PREFERENCE_BY_SCORE} from "../actions/types";


class SelectSort extends Component {

  sortByDate() {
      const {onByDate, onSetSortingPreferenceByDate} = this.props;
      onSetSortingPreferenceByDate({type: SET_SORTING_PREFERENCE_BY_DATE});
    if (onByDate) {
      onByDate();
    }
  }

  sortByScore() {
      const {onByScore, onSetSortingPreferenceByScore} = this.props;
      onSetSortingPreferenceByScore({type: SET_SORTING_PREFERENCE_BY_SCORE});
    if (onByScore) {
      onByScore();
    }
  }

    change = (event) => {
    switch(event.target.value) {
        case "0":{
          this.sortByScore();
          break;
        }
        case "1":{
            this.sortByDate();
            break;
        }
        default:
    }
  }

  render() {
    return (
        <select style={{float: 'right'}} onChange={this.change}>
          <option value="0">by score</option>
          <option value="1">by date</option>
        </select>
    )
  }
}

function mapStateToProps ({prefrences}) {
  return {prefrences}
}

function mapDispatchToProps (dispatch) {
  return {
    onSetSortingPreferenceByDate: () => dispatch(setSortingPreferenceByDate()),
    onSetSortingPreferenceByScore: () => dispatch(setSortingPreferenceByScore()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSort);
