<template>
    <div>

        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>

    import utils from '../nav/temp.js';
    import axios from 'axios'
    const area_axios = axios.create({
        headers: {'Content-Type': 'application/json;charset=utf-8'},
    })

    export default {
        data() {
            return {
                form: {
                    id:'1'
,                   username: '',
                    password:'',
                }
            }
        },
        created() {
            this.$emit('selectnav','bbs_login');
        },
        methods: {

            onSubmit() {
                area_axios({
                    url: 'http://localhost:8080/login',
                    method: 'post',
                    data:{"username":this.form.username,"password":this.form.password},
                }).then((response) => {
                    localStorage.setItem('token', response.data.token);
                    utils.$emit('demo',response.data.name);

                })
            },
            aaa(){
                console.log("62")
                utils.$emit('login',"asd");
            }
        }
    }
</script>

