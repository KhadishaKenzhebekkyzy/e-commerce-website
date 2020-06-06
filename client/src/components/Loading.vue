<template>
    <div class="loading">
        <img src="../assets/Astykbaga.png" alt="astykbaga" class="center">

        <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                100%
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .loading{
        position: relative;
    }
    .center{
        position: absolute;
        left: 50%;
        transform: translate(-50%, 100%);
    }
</style>