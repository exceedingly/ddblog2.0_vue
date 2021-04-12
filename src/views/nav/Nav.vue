<template>
    <div >
        <el-row :gutter="20" class="nav_backgroup">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <el-tabs v-model="activeName" @tab-click="handleClick" >
                        <el-tab-pane label="首页" name="index"></el-tab-pane>
                            <el-tab-pane label="博客" name="bbs_show" style="background-color: #cccccc"></el-tab-pane>
                        <el-tab-pane label="添加" name="bbs_add"></el-tab-pane>
                        <el-tab-pane label="展示" name="bbs_sing_show"></el-tab-pane>
                        <el-tab-pane label="编辑" name="bbs_edit"></el-tab-pane>
                        <el-tab-pane label="登录" name="bbs_login"></el-tab-pane>
                    </el-tabs>

                </div>
            </el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>
<script>

    export default {
        data() {
            return {
               activeName: 'index'
            };
        },
        methods: {
            handleClick(tab, event) {
                if(tab.name=="bbs_sing_show"){
                        this.$router.push({
                            path: `/info/show`,
                        })

                }else if(tab.name=="bbs_edit"){
                        this.$router.push({
                            path: `/info/edit`,
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