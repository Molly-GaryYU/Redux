import {useEffect,useState,userRef} from 'react';
import '../css-google/navigation.css';
import ninePointImg from "../img/img-google/ninePoint.png";
import app1 from "../img/img-google/app1.png";
import app2 from "../img/img-google/app2.png";
import app3 from "../img/img-google/app3.png";
import app4 from "../img/img-google/app4.png";
import app5 from "../img/img-google/app5.png";
import app6 from "../img/img-google/app6.png";


export default function NavContent({ninePointClikeOrNot,setNinePointClikeOrNot,ninePoint,dialog}){
  const [serverUrl, setServerUrl] = useState('http://localhost:8080/pages/back/goods/getGoods');
  const [dataResult,setDataResult]=useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/pages/back/goods/getGoods").then((result)=>{
      setDataResult({result});
      console.log('fetch in',dataResult);
    }).catch(()=>{
      setDataResult(moreData);
      console.log('catch in',dataResult)
    }
    );
  }, [serverUrl]);

    return (
    <nav className="navigation__nav">
        <a className="navigation__nav--img" href="/#" alt="">图片</a>
                    <div  className="navigation__nav--more " id="nine-point" ref={ninePoint}>
                        <img className="navigation__nav--more__img" src={ninePointImg} alt="" />
                    </div>
                    <div ref={dialog}  id="navigation__nav__dialog" className="navigation__nav__dialog" style={{display:ninePointClikeOrNot?'block':'none'}}>
                        <div id="navigation__nav__dialog--display" className="navigation__nav__dialog--display">
                            {ninePointClikeOrNot ? dataResult.map( (itemBlock) => {
                                return <div className="navigation__nav__dialog--display--type" >
                                  <div className='navigation__nav__dialog--display--type--child'>
                                    {itemBlock.map(({ name ,imgComponent,id})=>{
                                    return  <a className='navigation__nav__dialog--display--type--box' href="/#" key={id}>
                                      <div className='navigation__nav__dialog--display--type--box__div'>
                                        {imgComponent}
                                      </div>
                                      <span>{name}</span>
                                    </a>
                                   })}
                                    </div></div>
                              }): null}

                        </div>
                    </div>
                    <a className="navigation__nav--login__a navigation__nav--login">登录</a>
    </nav>
  );
}

const moreData=[[
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
    ]
    ,
    [
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
    ]];