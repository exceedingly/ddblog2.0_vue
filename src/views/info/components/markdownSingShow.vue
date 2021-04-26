<template>
    <div  class="sing" >
        <el-row>
            <el-col :span="5" ><div class="sing_grid-content "></div></el-col>
            <el-col :span="14" >
                <div>
                    <div class="sing_grid-content sing_bg-purple-light" style="padding: 50px">
                        <!--上-->
                        <div>
                            <!--标题名称-->
                            <div>

                                <h1>{{singBlog.name}}</h1><br/>
                                <span>{{singBlog.content}}</span>
                                <div>

                                </div>
                                <ul >
                                    <li style="float: right"><el-button type="primary" @click="bbsedit">立即创建</el-button></li>
                                    <li style="float: right"><el-button type="primary" @click="bbsedit">立即创建</el-button></li>
                                </ul>

                            </div>
                        </div>
                        <!--正文-->
                        <div>

                        </div>

                        <!--主题内容开始-->
                        <div  >
                            <p v-html="singBlog.markHtml"></p>
                        </div>
                        <!--主题内容结束-->
                    </div>
                </div>
            </el-col>
            <el-col :span="5"><div class="sing_grid-content "></div></el-col>
        </el-row>
    </div>
</template>

<script>


    import axios from 'axios'
    const area_axios = axios.create({
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        headers: {'token': localStorage.getItem('token')},
    })
    export default {

        created() {
            this.getSingTop()
        },
        data() {
            return {
                singBlog: [],
            };
        },
        methods: {
            getSingTop() {
                     var that = this
                     area_axios.get('http://localhost:8080/markdown/selBlogById?id='+this.$route.params.id)
                     .then(function (response) {
                        console.log(response.data)
                        response.data.markHtml = response.data.markHtml.replace(/<img/g,"<img style='max-width:100%;height:auto;'");
                        that.singBlog = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            bbsedit(){
                this.$router.push({
                    path: `/bbaEdit/`+this.$route.params.id,
                })
            }
        }
    };
</script>
<style>


    .sing_bg-purple-light {
        background: #e5e9f2;
    }
    .sing_grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .sing{
        background-color: #cccccc;
    }

</style>







