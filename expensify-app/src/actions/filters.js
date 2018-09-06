
export const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export const setTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text
});

export const sortbyAmount = () => ({
	type: "SORT_BY_AMOUNT"
})

export const sortbyDate = () => ({
	type: "SORT_BY_DATE"
})

export const setStartDate = (startDate = undefined) => ({
	type: "SET_START_DATE",
	startDate
})

export const setEndDate = (endDate = undefined) => ({
	type: "SET_END_DATE",
	endDate
})