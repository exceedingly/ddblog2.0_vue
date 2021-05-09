<template>
    <div id="app" class="wrapper" >
        <div >
            <div class="header"> <Nav_Bar></Nav_Bar></div>
            <div class="section"> <router-view/></div>
            <div class="footer">   <div style="width: 100%; z-index: 1000;align-content: center;margin:0 auto;width:300px;height:100px;margin-top: 1%;padding-top: 1%">
                <div style="float: left;margin-left: 6%">
                    <a href="#" class="footClick">关于本站</a>
                </div>
                <div style="float: left;margin-left: 6%">
                    |
                </div>
                <div style="float: left;margin-left: 6%">
                    <a href="#"  class="footClick">联系我</a>
                </div>
                <div style="float: left;margin-left: 6%">
                    |
                </div>
                <div style="float: left;margin-left: 6%">
                    <a href="#"  class="footClick">帮助中心</a>
                </div>
            </div>
            </div>
            <!--<el-container>-->
            <!--<el-header>   <Nav_Bar></Nav_Bar></el-header>-->
            <!--<el-main style="height: calc(100vh - 56px - 80px);"></el-main>-->
            <!--<el-footer>Footer</el-footer>-->
            <!--</el-container>-->
        </div>


    </div>
</template>
<script>
    import Nav_Bar from '../src/views/nav/Nav'
    import A from "@/views/test/a";
    export default {
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        },
        components: {
            A,
            Nav_Bar,
        },
    }
</script>

<style>
    html,body{height: 100%;}
    .wrapper{display: flex;flex-direction: column;min-height: 100%;}
    .header{flex: 0;background: blue;}
    .section{flex: 1;background: #dedede;}
    .footer{flex: 0;background: #99a9bf }
    .footClick{color: black  ;}
    .footClick:hover{color: white}
</style>
