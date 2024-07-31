import { useState } from 'react';
import '../css-google/navigation.css';
import ninePoint from "../img/img-google/ninePoint.png";
import app1 from "../img/img-google/app1.png";
import app2 from "../img/img-google/app2.png";
import app3 from "../img/img-google/app3.png";
import app4 from "../img/img-google/app4.png";
import app5 from "../img/img-google/app5.png";
import app6 from "../img/img-google/app6.png";

let box=[];
let appDisplay=[];
let clikeTimes=0;

export default function NavContent({ninePointClikeOrNot,setNinePointClikeOrNot}){
  const [boxShow ,setBoxShow]=useState([]);
  const [clikeTimes ,setClikeTimes]=useState(0);
    return (
    <nav className="navigation__nav">
        <a className="navigation__nav--img" href="/#" alt="">图片</a>
                    <div onClick={()=>{
                      DialogMoreApp(setBoxShow,setNinePointClikeOrNot);
                    }} className="navigation__nav--more " id="nine-point">
                        <img className="navigation__nav--more__img" src={ninePoint} alt="" />
                    </div>
                    <div  id="navigation__nav__dialog" className="navigation__nav__dialog" style={{display:ninePointClikeOrNot?'block':'none'}}>
                        <div id="navigation__nav__dialog--display" className="navigation__nav__dialog--display">
                            {ninePointClikeOrNot?boxShow:null}
                        </div>
                    </div>
                    <a className="navigation__nav--login__a navigation__nav--login">登录</a>
    </nav>
  );
}
//点击时请求
 function DialogMoreApp(setBoxShow){
  // question1！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
  if(clikeTimes===0){
    //有数据，但是后端没写好请求的数据接口（系统重装了，idea需要重新破解，现在进不去了）
    fetch("http://localhost:8080/pages/back/goods/getGoods").then((result)=>{
      forEachApps(result,setBoxShow);
      clikeTimes++;
      console.log('fetch in');
    }).catch(()=>{
      forEachApps(moreData,setBoxShow);
      clikeTimes++;
      console.log('catch in')
    }
    );
  }else{
    console.log('ninepoint display change')
   return 
  }
}
//组件间通信通过state（单机关闭搜索框）
//大类（第一层遍历）
function forEachApps(result,setBoxShow){
    result.forEach((elem)=>{
    let appArray=Object.values(elem);
    let box_a=AppBox(appArray)
    box.push(box_a);
    appDisplay=[];
    box_a=[];
  })
  setBoxShow(box);
}
//小类（第二层遍历,appArray是一个二维数组，所以得遍历两次）
function AppBox(appArray){
   appArray.forEach((row) =>{
    row.map((colume,i)=>{
      appDisplay.push(
        <a className='navigation__nav__dialog--display--type--box' href="/#" key={colume.id}>
          <div className='navigation__nav__dialog--display--type--box__div'>
            {colume.imgComponent}
          </div>
          <span>{colume.name}</span>
        </a>)
    })
  })
  return (<div className="navigation__nav__dialog--display--type" >
    <div className='navigation__nav__dialog--display--type--child'>
       {appDisplay}</div></div>)
}

const moreData=[{googleApp:[
    {name:'账号' , imgComponent: <img src={app1} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"0"},
    {name:'搜索' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"1"},
    {name:'搜索' ,imgComponent: < img src={app3} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"2"},
    {name:'搜索' ,imgComponent: < img src={app6} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"3"},
    {name:'搜索' ,imgComponent: < img src={app4} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"4"},
    {name:'搜索' ,imgComponent: < img src={app5} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"5"},
    {name:'搜索' ,imgComponent: < img src={app3} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"6"},
    {name:'搜索' ,imgComponent: < img src={app5} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"7"},
    {name:'搜索' ,imgComponent: < img src={app1} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"8"},
    {name:'搜索' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"9"},
    {name:'地图' ,imgComponent: < img src={app6} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"10"}
    ]}
    ,{
    anthorApp:[
    {name:'新闻' ,  imgComponent: < img src={app4} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"11"},
    {name:'Gemail' ,imgComponent: < img src={app5} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"12"},
    {name:'Meet' ,  imgComponent: < img src={app6} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"13"},
    {name:'Gemail' ,imgComponent: < img src={app1} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"14"},
    {name:'Gemail' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"15"},
    {name:'Gemail' ,imgComponent: < img src={app3} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"16"},
    {name:'Gemail' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"17"},
    {name:'Gemail' ,imgComponent: < img src={app3} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"18"},
    {name:'Gemail' ,imgComponent: < img src={app4} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"19"},
    {name:'Gemail' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"20"},
    {name:'Gemail' ,imgComponent: < img src={app6} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"21"},
    {name:'Gemail' ,imgComponent: < img src={app5} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"22"},
    {name:'Gemail' ,imgComponent: < img src={app2} className='navigation__nav__dialog--display--type--box__img'  alt=''/>,id:"23"}
    ]},];