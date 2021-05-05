<template>
    <div id="app" class="wrapper" >
        <div >
            <div class="header"> <Nav_Bar></Nav_Bar></div>
            <div class="section"> <router-view/></div>
            <div class="footer">        <div style="width: 100%;align-content: center;margin:0 auto;border:1px solid #000;width:300px;height:100px">页脚
            </div></div>
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

    export default {
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        },
        components: {
            Nav_Bar,
        },
    }
</script>

<style>
    html,body{height: 100%;}
    .wrapper{display: flex;flex-direction: column;min-height: 100%;}
    .header{flex: 0;background: blue;}
    .section{flex: 1;background: #dedede;}
    .footer{flex: 0;background: red}

</style>
