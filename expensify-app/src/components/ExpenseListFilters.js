import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortbyDate, sortbyAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={ (e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} 
                />
                <select 
                    value={ this.props.filters.sortBy }
                    onChange={ (e) => {
                        this.props.dispatch(e.target.value === "amount" ?  sortbyAmount() : sortbyDate());
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={ this.props.filters.startDate }
                    endDate={ this.props.filters.endDate }
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calendarFocused }
                    onFocusChange={ this.onFocusChange }
                    numberOfMonths={1}
                    isOutsideRange={ () => false } //choose dates from past
                    showClearDates={ true }
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);