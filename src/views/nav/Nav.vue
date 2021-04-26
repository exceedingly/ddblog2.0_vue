<template>
    <div >
        <indexImportOrder style="display: none" v-on:selectnav="selectLogin"/>
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
                        <el-tab-pane
                                :key="index"
                                :label="登录"
                                :name="bbs_login"
                        ></el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>
<script>
    import indexImportOrder from '../login/login'
    export default {
        data() {
            return {
                loginstatus:'登录',
                activeName: 'index',
                list: [
                    {
                        label: '首页',
                      //  number: 10,
                        name: 'index'
                    },
                    {
                        label: '博客',
                      //  number: 3,
                        name: 'bbs_show'
                    },
                    // {
                    //     label: '教程',
                    //     //number: 12,
                    //     name: 'bbs_add'
                    // },
                    // {
                    //     label: '展示',
                    //    // number: 2,
                    //     name: 'bbs_edit'
                    // },
                    {
                        label: '登录',
                       // number: 1,
                        name: 'bbs_login'
                    }
                ],

            };
        },
        components:{
            indexImportOrder,
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
                    this.$router.push({
                        path: `/info/login`,
                    })
                }
            },
            functionB(){
                var that = this
                that.list[4].label = msg

            },
            selectLogin(name){


                this.activeName=name
            },
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