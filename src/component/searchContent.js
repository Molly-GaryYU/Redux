import logo from '../img/img-google/logo.png'
import searchImg from '../img/img-google/search.png'
import deleteImg from '../img/img-google/delete.png'
import maiKeImg from '../img/img-google/maike.png'
import cameraImg from '../img/img-google/picture.png'
import hoverSearchImg from '../img/img-google/hoverSearch.png'
import hoverMaiKeImg from '../img/img-google/hoverMaike.png'
import hoverCameraImg from '../img/img-google/hoverPicture.png'
import { useState, userRef } from 'react'
import searchImg1 from '../img/img-google/serchImg1.png'
import searchImg2 from '../img/img-google/searchImg2.png'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchContent({ serchFrameElem }) {
    const [searchSigns, setSearchSigns] = useState([]);
    const foucsRightNow = useSelector(state => state.foucsRightNow);
    const inputOrNot = useSelector(state => state.inputOrNot);
    const inputFocusOrHover = useSelector(state => state.inputFocusOrHover)
    console.log('inputOrNot', inputOrNot);
    const dispatch = useDispatch();
    const foucsRightNowTurnTure = () => {
        dispatch({ type: 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE' })
    }

    return (
        <>
            <img className="search--logo__img" src={logo} alt="" />
            <div className="search--area">
                <SearchForm
                    foucsRightNow={foucsRightNow}
                    foucsRightNowTurnTure={foucsRightNowTurnTure}
                    inputFocusOrHover={inputFocusOrHover}
                    inputOrNot={inputOrNot}
                    setSearchSigns={setSearchSigns}
                    searchSigns={searchSigns}
                    serchFrameElem={serchFrameElem}
                ></SearchForm>
            </div>
        </>
    )
}
function SearchForm({ foucsRightNowTurnTure, foucsRightNow, inputFocusOrHover, inputOrNot, searchSigns, setSearchSigns, serchFrameElem }) {
    const dispatch = useDispatch()
    const setInputFocusOrHoverToFalse = () => {
        dispatch({ type: 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_FALSE' })
    }
    const setInputFocusOrHoverToTrue = () => {
        dispatch({ type: 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_TRUE' })
    }
    return (
        <div ref={serchFrameElem} id="serch--frame" className={inputFocusOrHover ? 'search--area__form search--area__form--background border--none' : 'search--area__form'}
            onMouseLeave={() => {
                if (foucsRightNow) {
                    console.log('do nothing')
                } else {
                    console.log('setInputFocusOrHoverToFalse')
                    setInputFocusOrHoverToFalse()
                }
            }}
            onMouseEnter={() => {
                if (foucsRightNow) {
                    console.log('do nothing')
                } else {
                    console.log('setInputFocusOrHoverToTrue')
                    setInputFocusOrHoverToTrue()
                }
            }}
            onClick={(event) => {
                console.log("saerch event:", event.target)
            }}
        >
            <SearchAreaFormTop foucsRightNowTurnTure={foucsRightNowTurnTure} inputFocusOrHover={inputFocusOrHover} setSearchSigns={setSearchSigns} setInputFocusOrHoverToTrue={setInputFocusOrHoverToTrue}></SearchAreaFormTop >
            <SearchAreaFormData inputOrNot={inputOrNot} searchSigns={searchSigns} ></SearchAreaFormData>
        </div>
    )
}
//输入框
function SearchAreaFormTop({ inputFocusOrHover, setSearchSigns, foucsRightNowTurnTure, setInputFocusOrHoverToTrue }) {
    const dispatch = useDispatch();
    const setInputOrNotToTrue = () => {
        dispatch({ type: 'CHANGE_INPUT_OR_NOT_TO_TRUE' })
    }
    return (
        <div className="search--area__form--top">
            <div className="search--area__form--top__div">
                <div className="search--area__form--left ">
                    <img className="search--area__form--left__img" src={inputFocusOrHover ? hoverSearchImg : searchImg} alt="" />
                    <input className={inputFocusOrHover ? 'search--area__form__input search--area__form--background ' : 'search--area__form__input'}
                        onFocus={() => {
                            foucsRightNowTurnTure();
                            setInputFocusOrHoverToTrue();
                        }}
                        onInput={() => {
                            setInputOrNotToTrue();
                            setSearchSigns([]);
                        }}
                    />
                </div>
                <div className="search--area__form--right">
                    <img className="search--area__form--right--hidden search--area__form--right--hide" src={deleteImg} alt="" />
                    <span className="search--area__form--right--line search--area__form--right--hide" id="search--area__form--right--line"></span>
                    <img className={inputFocusOrHover ? 'search--button--searchimg' : 'search--area__form--right--maike'} src={inputFocusOrHover ? hoverMaiKeImg : maiKeImg} alt="" />
                    <img className={inputFocusOrHover ? 'search--area__form--right--picture search--area__form--right--picture--hover' : 'search--area__form--right--picture'} src={inputFocusOrHover ? hoverCameraImg : cameraImg} alt="" />
                </div>
            </div>
        </div>

    )
}
//输入框检索内容
function SearchAreaFormData({ inputOrNot }) {
    console.log('inputOrNot in function', inputOrNot);
    return (
        <>
            <div id="search--area--line" className={inputOrNot ? 'search--area--line' : 'search--area--line diaplay--none'} ></div>
            <div className={inputOrNot ? 'search--area__form--data ' : 'search--area__form--data diaplay--none'}>
                {inputOrNot ? searchData.map((item, index) => {
                    let containerClass = 'search--area__form--data--row--margin change search--area__form--data--row';
                    let nameSpan
                    let introduceSpan
                    if (index === 0) {
                        containerClass = 'search--area__form--data--row--first--row change search--area__form--data--row';
                    }
                    //没图片有作者
                    if (item.introduceOrNot) {
                        if (item.img) {
                            nameSpan = 'search--area__form--data--row__span__none-img change'
                            introduceSpan = 'search--area__form--data--row__span__none-img search--area__form--data--row__author change'
                        } else {
                            nameSpan = 'change'
                            introduceSpan = 'search--area__form--data--row__author change'
                        }
                        return (
                            <div className={containerClass}>
                                {item.imgComponent}
                                <div className='search--area__form--data--row__div change'>
                                    <span className={nameSpan}>{item.name}</span>
                                    <span className={introduceSpan}>{item.introduce}</span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={containerClass}>
                                {item.imgComponent}
                                <div className='search--area__form--data--row__div change'>
                                    <span className='search--area__form--data--row__span'>{item.name}</span>
                                </div>
                            </div>
                        )
                    }
                }) : null}
            </div>
        </>)
}


const searchData = [
    { name: "啊~", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊吗粽", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "音乐家", introduceOrNot: true },
    { name: "啊朋友再见", img: true, imgComponent: <img src={searchImg1} className='search--area__form--data--row__img change' alt='' />, introduce: "歌曲", introduceOrNot: true },
    { name: "啊 meaning", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊!海军", img: true, imgComponent: <img src={searchImg2} className='search--area__form--data--row__img change' alt='' />, introduce: "1969年的电影", introduceOrNot: true },
    { name: "啊 表情包", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊哈加速器", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊哈", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊实打实", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false },
    { name: "啊的变调", img: false, imgComponent: <img src={hoverSearchImg} className='search--area__form--data--row__nothing change' alt='' />, introduce: "", introduceOrNot: false }
];

