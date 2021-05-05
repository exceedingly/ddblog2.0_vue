<div class="searchsubbox" id="fixedBar" :class="{ fixedBar: isFixed }">
    <ul class="searchul">
        <li @click="getSonAreaListData" :class="{ on: quyudownshow }">
            <p>
                <span>区域</span>
                <i></i>
            </p>
        </li>
        <li @click="getPriceListData" :class="{ on: jiagedownshow }">
            <p>
                <span>均价</span>
                <i></i>
            </p>
        </li>
        <li @click="getapartmentListData" :class="{ on: huxingdownshow }">
            <p>
                <span>户型</span>
                <i></i>
            </p>
        </li>
    </ul>
</div>
<div :style="{ marginTop: marginTop }">
    <!-- 数据列表 -->
</div>

<style>
    .fixedBar {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
    }
</style>
<script>

    export default {
        data () {
            return{
                isFixed: false,
                offsetTop: 0,
                marginTop: 0,
            }

        },
        mounted () {
            // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
            this.offsetTop = document.querySelector('#fixedBar').offsetTop;

            // 开启滚动监听
            window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
            // 滚动监听 滚动触发的效果写在这里
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

                if (scrollTop >= this.offsetTop) {
                    this.isFixed = true;
                    this.marginTop = document.querySelector('#fixedBar').offsetHeight + 'px';
                } else {
                    this.isFixed = false;
                    this.marginTop = 0;
                }
            }
        }

}



</script>