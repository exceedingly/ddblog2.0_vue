<template>

    <div class="bg-purple-dark" style="height: 100%">
        <el-row class="nav_backgroup">
            <!--左边开始-->
            <el-col :span="5" style="height:1800px;background-color: #f8f8f8">
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

                                <el-card class="box-card" style="width: 100%">
                                    <div>
                                        <el-breadcrumb separator="/">
                                            <el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
                                            <el-breadcrumb-item><a href="/">{{ this.navtag }}</a></el-breadcrumb-item>
                                        </el-breadcrumb>
                                    </div>
                                </el-card>

                                <div v-for="blog in allBlog" style="background-color: #f8f8f8">
                                    <el-card shadow="hover" class="content">
                                        <div style="height:100px" v-on:click="click_content(blog.id)">
                                            <span><a style="text-decoration:none;">{{ blog.name }}</a></span><br/><br/>
                                            <span>{{ blog.content }}</span><br/><br/>
                                            <span style="font-size: 15px">{{ blog.gmt_create }}</span>
                                        </div>

                                    </el-card>
                                    <br/>
                                </div>
                            </el-col>
                        </el-row>
                        <div style="text-align:center; padding: 20px">
                            <el-pagination
                                    style="font-size: 15px"
                                    @size-change='handleSizeChange'
                                    background
                                    @current-change='handleCurrentChange'
                                    :current-page='queryInfo.pagenum'
                                    :page-size='queryInfo.pagesize'
                                    layout='prev,pager,next'
                                    :total='total'>
                            </el-pagination>
                        </div>
                        <!--中间左边结束-->

                    </el-col>
                    <el-col :span="6">
                        <div ref="fixedBar" :class="searchBarFixed == true ? 'isFixed':'tab'"
                             >
                            <div style="background-color: #f8f8f8;margin: 10px;">
                                <el-button type="primary" style="width: 100%" @click="addbbs"> 发布文章</el-button>
                            </div>
                            <el-card class="bbsshowtypeall">

                                <div slot="header" class="clearfix">
                                    <span>全部标签</span>
                                    <!--箭头 和 全部标签-->
                                    <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-arrow-right"></el-button>
                                </div>
                                <!--标签集合-->
                                <div>
                                    <ul>
                                        <div v-for="o in allType"
                                             style="font-size: 15px;"
                                        >
                                            <li class="hover" style=" list-style: none;  width: 200px;margin-left: -50px ;padding: 10px"
                                                v-on:click="click_tag(o.id,o.name)">{{ o.name }}<span><i style="float: right"  class="el-icon-arrow-right"></i></span>
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
            <el-col :span="5" style="height: 1800px;background-color: #f8f8f8">
                <div></div>
            </el-col>
            <!--右边结束-->

        </el-row>

    </div>



</template>
<script>
    import axios from 'axios'
    import utils from "@/views/nav/temp";
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
                searchBarFixed: false,
                offsetTop: null,
                navtag: 'sad',
                queryInfo: {
                    pagenum: 1,//当前页数
                    pagesize: 10     //每页条数
                },
                total: 100,//总条目数
                allBlog: [],
                allType: [
                    {id: 1, name: "数据库"},
                    {id: 2, name: "面试"},
                    {id: 3, name: "linux"},
                    {id: 4, name: "算法"},
                    {id: 1, name: "数据库"},
                    {id: 2, name: "面试"},
                    {id: 3, name: "linux"},
                    {id: 4, name: "算法"},
                ],
                activeName: 'index',
            };
        },
        components: {
            utils,
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll)
            this.offsetTop = this.$refs.fixedBar.offsetTop
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll)
        },
        methods: {
            handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                scrollTop > this.offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false;
            },
            getBlog() {
                var that = this
                area_axios.get('http://localhost:8080/markdown/selBlogByPage?PageNum= ' + this.queryInfo.pagenum)
                    .then(function (response) {
                        that.allBlog = response.data.markDowns
                        that.total = response.data.total
                        window.scrollTo(0, 0);
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
                if (localStorage.getItem("token") == null) {
                    utils.$emit('navlogin', 'bbs_login');
                } else {
                    //去查询开始
                    //结束
                    this.$router.push({
                        path: `/info/add`,
                    })
                }
            },
            click_tag(id, tname) {
                this.navtag = tname
            },
            click_content(tid) {
                let routeUrl = this.$router.resolve({
                    path: "/singshow/" + tid,
                });
                window.open(routeUrl.href, '_blank');
            },
            handleSizeChange(val) {
                alert(val)
                this.queryInfo.pagenum = val;
                this.getBlog()
            },
            handleCurrentChange(val) {
                alert(val)
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
    .bbsshowtypeall {
    }
    .top {
    }
    .isFixed {

        position: fixed;

    }
</style>