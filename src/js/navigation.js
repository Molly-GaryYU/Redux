import '../css-google/navigation.css';
import ninePoint from "../img/img-googleninePoint.png";

export default function navContent(){
  <nav className="navigation__nav">
        <a className="navigation__nav--img" href="aaa" alt="">图片</a>
                    <div className="navigation__nav--more " id="nine-point">
                        <img className="navigation__nav--more__img" src={ninePoint} alt="" />
                    </div>
                    <div id="navigation__nav__dialog" className="navigation__nav__dialog" style="display: none;">
                        <div id="navigation__nav__dialog--display" className="navigation__nav__dialog--display">
                          {/* 内容填充 */}
                        </div>
                    </div>
                    <a className="navigation__nav--login__a navigation__nav--login">登录</a>
  </nav>
}