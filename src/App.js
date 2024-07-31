import "./css-google/bottom.css";
import './css-google/googleHome.css';
import './css-google/search.css';
import './css-google/navigation.css';
import FooterContainer from './component/footerContainer.js'
import NavContent from './component/navigation';
import SearchContent  from './component/searchContent.js'
import { useState } from "react";


function App() {
  const [foucsRightNow ,setFoucsRightNow] =useState(false)
  const [inputOrNot ,setInputOrNot] =useState(false)
  const [ninePointClikeOrNot,setNinePointClikeOrNot]=useState(false)
  const [inputFocusOrHover ,setInputFocusOrHover] =useState(false)
  return (
    <div className="main-frame" id="main-frame" onClick={(event)=>{
      const serchFrameElem=document.getElementById('serch--frame');
      const ninePoint =document.getElementById('nine-point')
      const dialog=document.getElementById('navigation__nav__dialog');
      console.log(event.target)
      if(serchFrameElem.contains(event.target)){
        console.log("点击在搜索框内");
        setFoucsRightNow(true)
        setNinePointClikeOrNot(false)
      }
      else if(dialog.contains(event.target)){
        console.log("点击在抽屉1")
        setFoucsRightNow(false)
        setNinePointClikeOrNot(!ninePointClikeOrNot)
        setInputOrNot(false)
      }else if(ninePoint.contains(event.target)){
        console.log("点击在抽屉按钮")
        setFoucsRightNow(false)
        setNinePointClikeOrNot(!ninePointClikeOrNot)
        setInputOrNot(false)
      }
      else{
        console.log("页面点击")
        setFoucsRightNow(false)
        setInputFocusOrHover(false)
        setNinePointClikeOrNot(false)
        setInputOrNot(false)
      }
    }}>
     <div className="navigation">
      <NavContent  ninePointClikeOrNot={ninePointClikeOrNot} setNinePointClikeOrNot={setNinePointClikeOrNot}/>
     </div>
     <div className='search'>
       <SearchContent 
       foucsRightNow={foucsRightNow} 
       setFoucsRightNow={setFoucsRightNow} 
       inputOrNot={inputOrNot} 
       setInputOrNot={setInputOrNot} 
       inputFocusOrHover={inputFocusOrHover}
       setInputFocusOrHover={setInputFocusOrHover}
       />
     </div>
             <FooterContainer />  
    </div>
  );
}

export default App;
