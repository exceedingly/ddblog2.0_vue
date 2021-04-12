<template>
    <div id="app" >
        <div >
            <Nav_Bar></Nav_Bar>
        </div>

        <router-view/>
    </div>
</template>
<script>
    import Nav_Bar from '../src/views/nav/Nav'

    export default {
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'background-color:#f8f8f8')
        },
        components: {
            Nav_Bar,
        },
    }
</script>

<style>

</style>
