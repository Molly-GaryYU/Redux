export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE':
      return { ...state, foucsRightNow: true };
    case 'CHANGE_FOCUS_RIGHT_NOW_TO_FALSE':
      return { ...state, foucsRightNow: false };
    case 'CHANGE_INPUT_OR_NOT_TO_TRUE':
      return { ...state, inputOrNot: true };
    case 'CHANGE_INPUT_OR_NOT_TO_FALSE':
      return { ...state, inputOrNot: false };
    case 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_TRUE':
      return { ...state, inputFocusOrHover: true };
    case 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_FALSE':
      return { ...state, inputFocusOrHover: false };
    case 'CHANGE_NINE_POINT_CLICK_OR_NOT_TO_TRUE':
      return { ...state, ninePointClikeOrNot: true };
    case 'CHANGE_NINE_POINT_CLICK_OR_NOT_TO_FALSE':
      return { ...state, ninePointClikeOrNot: false };
    case 'CHANGE_NINE_POINT':
      return { ...state, ninePointClikeOrNot: !action.dialogOpenOrNot };

    default:
      return state;
  }
}

