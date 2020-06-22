<template>
    <fragment>
        <v-bottom-sheet v-model="sheet" inset>
            <v-sheet class="text-center" height="200px">
                <v-btn
                class="mt-6"
                text
                color="red"
                @click="sheet = !sheet"
                >close</v-btn>
                <div class="py-3">This is a bottom sheet using the controlled by v-model instead of activator</div>
            </v-sheet>
        </v-bottom-sheet>
    </fragment>
</template>

<script>
export default {
    data() {
        return {
            sheet: false
        }
    },
    created() {
        this.$root.$refs.BottomSheetShare = this
    }
}
</script>

<style lang="scss">
    .v-sheet {
        border-radius: 0px;
    }
    .v-bottom-sheet.v-dialog.v-bottom-sheet--inset {
        max-width: 430px;
    }
</style>