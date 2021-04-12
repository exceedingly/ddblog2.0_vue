<template>
    <div>

        <el-row :gutter="20">
            <el-col :span="5" style="min-height:1px;"><div ></div></el-col>
            <el-col :span="12"><div class="grid-content div_backgroup">2</div></el-col>
            <el-col :span="2"><div class="grid-content div_backgroup">4</div></el-col>
            <el-col :span="5" style="min-height:1px;"><div ></div></el-col>
        </el-row>


    </div>

</template>
<script>

</script>

<style>
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .div_backgroup {
        background: #2a9292;
    }
</style>