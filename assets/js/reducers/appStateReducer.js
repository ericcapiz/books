const initialState = {
  myList: [],
  openingInfoBook: {},
  popupOpen: false,
  listOpen: false
};
let newState
const AppStateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        var myList = [...state.myList, action.payload];

        newState = Object.assign({}, state, {
          myList: myList
        });
        return newState;
        break;
      case 'REMOVE_BOOK':
        var myList = state.myList.filter(item =>
          item.id != action.payload);

        newState = Object.assign({}, state, {
          myList: myList
        });
        return newState;
        break;
        switch (action.type) {
          #######start below at 22 sec mark
      case 'ADD_BOOK':
        var myList = [...state.myList, action.payload];

        newState = Object.assign({}, state, {
          myList: myList
        });
        return newState;
        break;
      default:
        return state;
        break;

        }
    };
