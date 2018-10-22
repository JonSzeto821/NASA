export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  data: {},
  photos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case 'APOD':
      return {
        ...state,
        data: action.data
      }

    case 'APODDate':
      return {
        ...state,
        date: action.data
      }

      case 'MARS':
      return {
        ...state,
        photos: action.data.photos
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const getAPOD = () => {
  return dispatch => {
    // dispatch({
    //   type: INCREMENT_REQUESTED
    // })

    // return setTimeout(() => {
    //   dispatch({
    //     type: INCREMENT
    //   })
    // }, 3000)

    fetch('https://api.nasa.gov/planetary/apod?api_key=8brMONinXbOoQYWDQ3465hx2xgbFKJGj2RqIvsMT')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log('apple',myJson);
        dispatch({
          type: 'APOD',
          data: myJson
        })
      });
  }
}

export const getAPODDate = () => {
  return dispatch => {
    // dispatch({
    //   type: INCREMENT_REQUESTED
    // })

    fetch('https://api.nasa.gov/planetary/apod?api_key=8brMONinXbOoQYWDQ3465hx2xgbFKJGj2RqIvsMT')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log('guava', myJson);
        dispatch({
          type: 'APODDate',
          date: myJson.date
        })
      });
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=8brMONinXbOoQYWDQ3465hx2xgbFKJGj2RqIvsMT')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        dispatch({
          type: 'MARS',
          data: myJson
        })
      });
  }
}
