<template>
    <div>
        <el-select v-model="query">
            <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                options: []
            }
        }
    }
</script>
<style></style>