<template>
    <!--第一行 开始-->
    <div class="bg-purple-dark" style="height: 100%">
        <el-row :gutter="20" class="nav_backgroup" type="flex">
            <!--第一行左边-->
            <el-col :span="5" style="background-color: #f8f8f8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <!--第一行左边结束-->
            <!--第一行中间开始-->
            <el-col :span="14" style="background-color: #f8f8f8">


                <div :gutter="20" class="nav_backgroup">
                    <!--第一行中间左边开始-->
                    <el-col :span="18" style="background-color: #f8f8f8;margin-bottom: 10px">
                        <el-card shadow="hover" style="height: 40px;margin: 10px;width: 573px;margin-left: -10px">
                            123
                        </el-card>
                    </el-col>
                    <!--第一行中间左边结束-->
                    <!--第一行中间右边开始-->
                    <el-col :span="6" style="background-color: #f8f8f8">
                        <div style="background-color: #f8f8f8;margin: 10px;">
                            <el-button type="primary" style="width: 100%" @click="addbbs"> 发布文章</el-button>
                        </div>
                    </el-col>
                    <!--第一行中间右边结束-->
                </div>


            </el-col>
            <!--第一行中间结束-->
            <!--第一行右边开始-->
            <el-col :span="5" style="background-color: #f8f8f8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <!--第一行右边结束-->
        </el-row>
        <!--第一行结束-->
        <el-row :gutter="20" class="nav_backgroup">
            <!--左边开始-->
            <el-col :span="5" style="height: 1630px;background-color: #f8f8f8">
                <div></div>
            </el-col>
            <!--左边结束-->
            <!--中间开始-->
            <el-col :span="14">

                <el-row :gutter="20">
                    <!--中间左边开始-->
                    <el-col :span="18">

                        <el-row type="flex">
                            <el-col>
                                <div v-for="blog in allBlog" style="background-color: #f8f8f8">
                                    <el-card shadow="hover" class="content">

                                        <div style="height:100px" v-on:click="click_content(blog.id)">
                                            <span><a style="text-decoration:none;">{{blog.name}}</a></span><br/><br/>
                                            <span>{{blog.content}}</span><br/><br/>
                                            <span style="font-size: 15px">{{blog.gmt_create }}</span>
                                        </div>

                                    </el-card>
                                    <br/>
                                </div>
                            </el-col>
                        </el-row>
                        <div >

                            <el-pagination
                                    @size-change='handleSizeChange'
                                    background
                                    @current-change='handleCurrentChange'
                                    :current-page ='queryInfo.pagenum'

                                    :page-size='queryInfo.pagesize'
                                    layout='prev,pager,next'
                                    :total='total'>
                            </el-pagination>

                        </div>




                    <!--中间左边结束-->


                    <!--中间右边开始-->



                    <!--中间右边结束-->.
                    </el-col>
                    <el-col :span="6">
                        <div style="background-color: #f8f8f8;height: 1630px">

                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span>全部标签</span>
                                    <el-button style="float: right; padding: 3px 0" type="text"
                                               icon="el-icon-arrow-right"></el-button>
                                </div>
                                <div>
                                    <ul>
                                        <div v-for="o in allType"
                                             style="font-size: 15px;margin: 10px;padding: 15px;margin-left:-30px;"
                                             class="hover">
                                            <li style=" list-style: none; padding: -15px;margin: -10px ;margin-left:10px;width: 100%"
                                                v-on:click="click_tag(o.id)">{{ o.name }}<i style="float: right;"
                                                                                            class="el-icon-arrow-right"></i>
                                            </li>
                                        </div>
                                    </ul>

                                </div>
                            </el-card>


                        </div>
                    </el-col>
                </el-row>

            </el-col>
            <!--中间结束-->
            <!--右边开始-->
            <el-col :span="5" style="height: 1630px;background-color: #f8f8f8">
                <div></div>
            </el-col>
            <!--右边结束-->

        </el-row>

        <div style="width: 100%;align-content: center;margin:0 auto;border:1px solid #000;width:300px;height:100px">页脚
        </div>
    </div>


</template>
<script>
    import axios from 'axios'

    const area_axios = axios.create({
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        headers: {'token': localStorage.getItem('token')},
    })

    export default {
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        },
        created() {
            this.getBlog()
            this.getTag()
        },
        data() {
            return {
                queryInfo:{
                    pagenum:1,//当前页数
                    pagesize: 10     //每页条数
                },
                total:null,//总条目数
                allBlog: [],
                allType: [],
                activeName: 'index',
            };
        },
        methods: {
            getBlog() {
                var that = this
                area_axios.get('http://localhost:8080/markdown/selBlogByPage?PageNum= '+this.queryInfo.pagenum)
                    .then(function (response) {
                        that.allBlog = response.data.markDowns
                        that.total = response.data.total
                        window.scrollTo(0,0);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getTag() {
                var that = this
                area_axios.get('http://localhost:8080/markdown/selBlogType')
                    .then(function (response) {
                        that.allType = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            addbbs() {
                this.$router.push({
                    path: `/info/add`,
                })
            },
            click_tag(id) {
                alert(id)
            },
            click_content(tid) {
                let routeUrl = this.$router.resolve({
                    path: "/singshow/" + tid,
                });
                window.open(routeUrl.href, '_blank');
            },
            handleSizeChange(val){
                this.queryInfo.pagenum = val;
                this.getBlog()
            },
            handleCurrentChange(val){
                this.queryInfo.pagenum = val;
                this.getBlog()
            },
        }
    };
</script>
<style>
    .hover:hover {
        background-color: rgb(233, 236, 239);
        cursor: pointer;
    }

    .content:hover {

        cursor: pointer;
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
        background: rgb(233, 236, 239)
    }


</style>