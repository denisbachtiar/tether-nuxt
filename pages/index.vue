<template>
    <fragment>
        <v-app v-if="loading">
            <Skeleton/>
        </v-app>
    </fragment>
</template>
<script>
import Skeleton from '@/components/Skeleton'
export default {
    components: {
        Skeleton
    },
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        this.loading = false
        this.$router.push('notfound')
    },
}
</script>