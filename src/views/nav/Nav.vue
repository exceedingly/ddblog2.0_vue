<template>
    <div >
        <el-row :gutter="20" class="nav_backgroup">
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>


            <!--          中间-->
            <el-col :span="12">
                <!--              布局开始-->
                <el-col :span="10"><div></div></el-col>
                <el-col :span="2"></el-col>

                <!--              布局结束-->
                <div class="grid-content bg-purple">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane
                                v-for="(item,index) in list"
                                :key="index"
                                :label="item.label"
                                :name="item.name"
                        ></el-tab-pane>
                        <!--<el-tab-pane label="登录" name="bbs_login'"> </el-tab-pane>-->
                    </el-tabs>
                </div>
            </el-col>

            <el-col :span="2">
                <el-button type="primary" class="el-icon-user-solid"  style="float: right;margin-right: 22px" @click="loginbtn" >&nbsp;&nbsp;登录</el-button>
            </el-col>

            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <el-dialog
                title="登陆界面"
                :visible.sync="centerDialogVisible"
                width="30%"
                customClass="dialogClass"
                modal
                :close-on-click-modal="false"
                :close-on-press-escape="false"
                center>
            <span><el-input placeholder="请输入数字账号" :style="{fontSize:loginflagusername?'20px':'15px'}" @mouseenter.native="enteru" @mouseleave.native="leaveu" style=" width: 80%;margin-left: 10%;margin-bottom: 5%" v-model="login.username"></el-input></span>
            <span><el-input placeholder="请输入密码" :style="{fontSize:loginflagpassword?'20px':'15px'}" @mouseenter.native="enterup" @mouseleave.native="leaveup" style="width: 80%;margin-left: 10%;margin-bottom: 5%" v-model="login.password"></el-input></span>
            <el-button style="width: 80%;margin-left: 10%" v-model="login.password" type="primary" @click="navlogin">确 定</el-button>
            <span slot="footer" class="dialog-footer">登陆代表同意东东博客协议</span>
        </el-dialog>
    </div>
</template>
<script>
    import indexImportOrder from '../login/login'
    import utils from '../nav/temp.js';
    import bbsShow from '../markdown/bbsShow'
    export default {
        data() {
            return {
                centerDialogVisible: false,
                activeName: 'index',
                list: [
                    {
                        label: '首页',
                        name: 'index'
                    },
                    {
                        label: '博客',
                        name: 'bbs_show'
                    },

                ],
                login:{
                    username:'',
                    password:''
                },
                loginflagusername:false,
                loginflagpassword:false,

            };
        },
        components:{
            indexImportOrder,
            utils,
            bbsShow,
        },
        mounted() {
            utils.$on('demo', (val) => {
                var that = this
                that.list[2].label = val
            });
            utils.$on('navlogin', (val) => {
                this.centerDialogVisible = true;
            });
        },
        methods: {
            handleClick(tab, event) {
                if(tab.name=="bbs_sing_show"){
                    this.$router.push({
                        path: `/info/show`,
                    })
                }else if(tab.name=="bbs_edit"){
                    this.$router.push({
                        path: `/info/add`,
                    })
                } else if(tab.name=="index"){
                    this.$router.push({
                        path: `/`,
                    })
                }else if(tab.name=="bbs_add"){
                    this.$router.push({
                        path: `/bbs_add`,
                    })
                }else if(tab.name=="bbs_show") {
                    this.$router.push({
                        path: `/bbs_show`,
                    })
                }
            },
            demo(a){
                alert("aaa")
            },

            enteru(){
                this.loginflagusername=true
            },
            leaveu(){
                this.loginflagusername=false
            },
            enterup(){
                this.loginflagpassword=true
            },
            leaveup(){
                this.loginflagpassword=false
            },
            navlogin(){
                this.centerDialogVisible = true;
                console.log(this.login.username)
                console.log(this.login.password)
                this.login.username=""
                this.login.password=""

            },
            loginbtn(){
                this.centerDialogVisible= true
            },
            openlogin(){
                this.centerDialogVisible= true
            }


        }
    };
</script>
<style>
    .el-dialog {
        border-radius: 25px
    }

    .bg-purple {

    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .nav_backgroup {
        background:white  ;
    }
    .el-dialog  {
        border-radius: 15px;
    }

    body{margin-top: 0px}
</style>
