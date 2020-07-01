<template>
  <fragment>
        <div v-if="error.statusCode === 404" class="abs-middle text-center">
            <h4 class="mb-1">Activity tidak tersedia</h4>
            <a href="https://tether.co.id/"><p class="mb-0">kembali ke home</p></a>
        </div>
        <div v-else class="abs-middle text-center">
            <h4 class="mb-1">An error occured</h4>
            <a href="https://tether.co.id/"><p class="mb-0">kembali ke home</p></a>
        </div>
    </fragment>
</template>

<script>
export default {
  props: ['error'],
//   layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scope>
    .abs-middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>