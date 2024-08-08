import "./css-google/bottom.css";
import './css-google/googleHome.css';
import './css-google/search.css';
import './css-google/navigation.css';
import FooterContainer from './component/footerContainer.js'
import NavContent from './component/navigation';
import SearchContent from './component/searchContent.js'
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const serchFrameElem = useRef(null);
  const ninePoint = useRef(null);
  const dialog = useRef(null);
  const ninePointClikeOrNot = useSelector(state => state.ninePointClikeOrNot);
  const foucsRightNowTurnFalse = () => {
    dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE' })
  }
  const foucsRightNowTurnTure = () => {
    dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE' })
  }
  const inputOrNotTurnFalse = () => {
    dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_FALSE' })
  }
  const setInputFocusOrHoverToFalse = () => {
    dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_FALSE' })
  }
  const ninePointClikeOrNotTurnFalse = () => {
    dispatch({ type: 'CHANGE_NINE_POINT_CLICK_OR_NOT_TO_FALSE' })
  }
  const clickNinePoint = () => {
    dispatch({ type: 'CHANGE_NINE_POINT', dialogOpenOrNot: ninePointClikeOrNot })
  }

  return (
    <div className="main-frame" id="main-frame" onClick={(event) => {
      const serchFrameElemNode = serchFrameElem.current;
      const ninePointNode = ninePoint.current;
      const dialogNode = dialog.current;
      if (serchFrameElemNode.contains(event.target)) {
        console.log("点击在搜索框内");
        foucsRightNowTurnFalse();
        ninePointClikeOrNotTurnFalse();
      }
      else if (dialogNode.contains(event.target)) {
        console.log("点击在抽屉")
        foucsRightNowTurnTure()
        dispatch({ type: 'CHANGE_NINE_POINT' })
        inputOrNotTurnFalse();
      } else if (ninePointNode.contains(event.target)) {
        console.log("点击在抽屉按钮")
        foucsRightNowTurnTure();
        clickNinePoint();
        inputOrNotTurnFalse()
      }
      else {
        console.log("页面点击")
        foucsRightNowTurnTure();
        setInputFocusOrHoverToFalse();
        ninePointClikeOrNotTurnFalse();
        inputOrNotTurnFalse();
      }
    }}>
      <div className="navigation">
        <NavContent
          ninePoint={ninePoint}
          dialog={dialog}
        />
      </div>
      <div className='search'>
        <SearchContent
          serchFrameElem={serchFrameElem}
        />
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
