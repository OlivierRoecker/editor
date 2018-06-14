import { createStore } from 'redux'

const initialState = {
  bg: {
    color: 'green',
    size: 512,
  },
  fg: {
    color: 'yellow',
    rotate: 0,
    scalex: 1,
    scaley: 1,
    filename: '',
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_BG_COLOR':
      return {
        ...state,
        bg: {
          ...state.bg,
          color: action.payload.color,
        },
      }

    case 'CHANGE_BG_SIZE':
      return {
        ...state,
        bg: {
          ...state.bg,
          size: action.payload.size,
        },
      }

    case 'CHANGE_FG_COLOR':
      return {
        ...state,
        fg: {
          ...state.fg,
          color: action.payload.color,
        },
      }

    case 'CHANGE_FG_ROTATE':
      return {
        ...state,
        fg: {
          ...state.fg,
          rotate: state.fg.rotate + action.payload.offset,
        },
      }

    case 'CHANGE_FG_SCALE': {
      const key = `scale${action.payload.axis}`
      return {
        ...state,
        fg: { ...state.fg, [key]: state.fg[key] * -1 },
      }
    }

    case 'CHANGE_FG_FILENAME':
      return {
        ...state,
        fg: {
          ...state.fg,
          filename: action.payload.filename,
        },
      }

    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
