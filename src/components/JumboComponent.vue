<template>
    <div class="jumbo">
        <video autoplay muted loop id="myVideo">
            <source src="/video/trailer.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.jumbo{
    margin-top: -200px;
    height: 800px;
    position: relative;
    #myVideo {
        position: absolute;
        left: 0;
        top:0;
        min-width: 100%;
        // min-height: 100%;
    }
}

</style>