<template>
<div>
    <mavon-editor v-html="Blog" style="padding:20px">
    </mavon-editor>
</div>
</template>
<script>
    // 导入组件 及 组件样式
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
        export default {
        components: {
            mavonEditor,
        },
        data () {
            return {
                Blog:'',
                activeName: 'bbs_show'
            }
        },
        methods: {
            async getBlog(){
                const res = '<ul>\n' +
                    '<li>标题</li>\n' +
                    '<li>图片<br />\n' +
                    '<img src="http://localhost:8080/blog_files/pictures/20210319/233310_38520a38-865e-41f0-a95a-7589943647d4_vue-3.png" alt="vue3.png" /></li>\n' +
                    '</ul>\n'
                //将返回的数据赋值给Blog
                this.Blog = res
            }
        },
        created(){
            this.getBlog()
        }
    }

</script>




















