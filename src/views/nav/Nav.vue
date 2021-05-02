<template>
    <div >
        <el-row :gutter="20" class="nav_backgroup">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16">
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
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <el-dialog
                title="登陆界面"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span><el-input v-model="login.username"></el-input></span>
            <span><el-input v-model="login.password"></el-input></span>
            <span slot="footer" class="dialog-footer"><button type="primary" @click="navlogin">确 定</button></span>
        </el-dialog>
    </div>
</template>
<script>
    import indexImportOrder from '../login/login'
    import utils from '../nav/temp.js';
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
                    {
                        label: '登录',
                        name: 'bbs_login'
                    }
                ],
                login:{
                    username:'',
                    password:''
                }

            };
        },
        components:{
            indexImportOrder,
            utils,
        },
        mounted() {
            utils.$on('demo', (val) => {
                var that = this
                that.list[2].label = val
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
                }else if(tab.name=="bbs_login") {
                    // this.$router.push({
                    //     path: `/info/login`,
                    // })

                    this.centerDialogVisible = true
                }
            },
            functionB(){
                var that = this
                that.list[2].label = msg
            },
            selectLogin(name){
                this.activeName=name
            },
            demo(a){
                alert("aaa")
            },
            navlogin(){
                centerDialogVisible = false;
                console.log(login.username)
                console.log(login.password)
            }

        }
    };
</script>
<style>


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
    body{margin-top: 0px}
</style>