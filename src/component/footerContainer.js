import '../css-google/bottom.css'

export default function footerContainer(){
    return(
        <footer class="bottom">
        <nav class="bottom--left">
          <a class="bottom__a">About Google</a>
          <a class="bottom__a">广告</a>
          <a class="bottom__a">商务</a>
          <a class="bottom__a">Google 搜索运动方式</a>
        </nav>
        <nav class="bottom--right">
          <a class="bottom__a">隐私权</a>
          <a class="bottom__a">条款</a>
          <a class="bottom__a">设置</a>
        </nav>
   </footer>
    )
}