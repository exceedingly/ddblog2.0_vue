<template>
    <div  class="sing" >
        <el-row>
            <el-col :span="5" ><div class="sing_grid-content "></div></el-col>
            <el-col :span="14" s >
                <div>
                    <div class="sing_grid-content sing_bg-purple-light" style="padding: 50px">
                        <!--上-->
                        <div>
                            <!--标题名称-->
                            <div>
                                <h1>{{singBlog.name}}</h1>
                            </div>
                        </div>
                        <!--正文-->
                        <div>

                        </div>




                        <!--主题内容开始-->
                        <div >
                            <p v-html="singBlogInfo.markHtml"></p>
                        </div>
                        <div>
                            <h1>{{singBlog.name}}</h1>
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
    })
    export default {

        created() {
            this.getSingTop()
        },
        data() {
            return {
                singBlog: [],
                singBlogInfo:[],
            };
        },
        methods: {
            getSingTop() {
                var that = this
                area_axios.get('http://localhost:8080/markdown/selBlogById?id='+this.$route.params.id)
                    .then(function (response) {
                        area_axios.get('http://localhost:8080/markdown/selBlogByMid?mid='+response.data.id)
                            .then(function (response) {
                                console.log(response.data)
                                response.data.markHtml = response.data.markHtml.replace(/<img/g,"<img style='max-width:100%;height:auto;'");
                                that.singBlogInfo = response.data
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        that.singBlog = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

        }
    };


</script>
<style>

    .sing_bg-purple {
        background: #d3dce6;
    }
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







