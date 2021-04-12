<template>
    <div class="markdown_edit_backgroup">
        <div>
            <div>
                <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">

                    <el-input v-model="bbs_name" placeholder="请输入文章标题"></el-input>

                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-purple">

                                <el-input v-model="bbs_description" placeholder="请输入文章描述"></el-input>

                    </div>
                </el-col>
            </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="grid-content bg-purple">

                            <el-select v-model="value" clearable placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>

                        </div>
                    </el-col>
                    <el-col :span="13" style="min-height:1px;" >
                        <div></div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                             <el-button type="primary" @click="onSubmit">立即创建</el-button>
                             <el-button>取消</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
                <div >
                    <mavon-editor style="height: 100vh;" ref="md" class="md" v-model="sqlData.markdown" @imgAdd="imgAdd" @imgDel="imgDel" @save="saveArticle"/>
                </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    const area_axios = axios.create({
        headers: {'Content-Type': 'application/json;charset=utf-8'},
    })
    const file_axios = axios.create({
        headers: {'Content-Type': 'multipart/form-data'},
    })
    const area_form_axios = axios.create({
        headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    })
    export default {
        name: "Markdown",
        data() {
            return {
                options: [{
                    value: '黄金糕',
                    label: '黄金糕'
                }, {
                    value: '双皮奶',
                    label: '双皮奶'
                }, {
                    value: '蚵仔煎',
                    label: '蚵仔煎'
                }, {
                    value: '龙须面',
                    label: '龙须面'
                }, {
                    value: '北京烤鸭',
                    label: '北京烤鸭'
                }],
                value: '',
                sqlData:{
                    markdown:'',
                    html:'',
                },
                bbs_description:'',
                bbs_name:'',
                // bbs_name:'文章名称',
                img_file: {},// 一次上次多张图片时使用
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        },

        methods: {
            created(){
                activeName: 'bbs_edit'
                alert("asasas");
                this.$refs.md.d_render ="我最帅"
            },
            saveArticle(){

                var htmlCode = this.$refs.md.d_render;
                var markdownCode = this.$refs.md.d_value;
                if(htmlCode.length == 0 || markdownCode.length == 0){
                    alert("请填写")
                    return;
                }
                var params ={"markCode":markdownCode,"markHtml":htmlCode};
                area_axios({
                    url: 'http://localhost:8080/api/add',
                    method: 'post',
                    data: params,
                }).then((response) => {
                    if(response.data > 0){
                        alert("成功")
                    }else {
                        alert("失败")
                    }
                })
            },
            // 添加图片
            imgAdd(pos, file){
                console.log("pos:"+pos)
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('pic', file);
                file_axios({
                    url: 'http://localhost:8080/api/img_upload',
                    method: 'post',
                    data: formdata,
                }).then((response) => {
                    // 第二步.将返回的url替换到文本原位置
                    var url = response.data;
                    //通过引入对象获取: import {mavonEditor} from ... 等方式引入后，此时$vm即为mavonEditor
                    //通过$refs获取: html声明ref : <mavon-editor ref=md ></mavon-editor>， 此时$vm为 this.$refs.md`
                    alert(url)
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            onSubmit() {
                if(this.bbs_name.length > 0 && this.bbs_name.trim().length != 0   ){
                    alert(this.bbs_name+this.bbs_description+this.value)
                    var htmlCode = this.$refs.md.d_render;
                    var markdownCode = this.$refs.md.d_value;
                    if(htmlCode.length == 0 || markdownCode.length == 0){
                        alert("请填写")
                        return;
                    }
                    var params ={   "markCode":markdownCode,
                                    "markHtml":htmlCode,
                                    "name":this.bbs_name,
                                    "content":this.bbs_description,
                                    "type":this.value,
                    };
                    area_axios({
                        url: 'http://localhost:8080/api/add',
                        method: 'post',
                        data: params,
                    }).then((response) => {
                        if(response.data > 0){
                            alert("成功")
                        }else {
                            alert("失败")
                        }
                    })
                }else{
                    alert("null")
                }
            },
            // 删除图片
            imgDel(pos){
                console.log("imgDel pos:"+pos)
            },
        },

    }

</script>
<style>
    .markdown_edit_backgroup{
        margin: 0px;
        margin-top:0px;
        background-color: wheat;
        padding: 2%;
        height: 100vh;
    }
    /*body{height: 100%;width: 100%;position: relative;}*/
</style>








