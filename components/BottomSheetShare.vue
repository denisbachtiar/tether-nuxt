<template>
    <fragment>
        <v-bottom-sheet v-model="sheet" inset>
            <v-sheet class="pt-9 pb-8" height="auto">
            <h5 class="pl-6 mb-5" style="font-size: 16px">Bagikan Activity</h5>
                <div class="d-flex flex-wrap">
                    <ShareNetwork
                        v-for="(network, index) in networks" :key="index"
                        :network="network.network"
                        :url="url"
                        :title="title"
                    >
                    <span class="iconify" :style="{'color':network.color}" :data-icon="network.icon" data-inline="false"></span>
                    </ShareNetwork>
                </div>
            </v-sheet>
        </v-bottom-sheet>
    </fragment>
</template>
<script>
export default {
    data() {
        return {
            sheet: false,
            url: window.location.href,
            title: '',
            networks: [
                { network: 'facebook', name: 'Facebook', icon: 'entypo-social:facebook-with-circle', color: '#1877f2' },
                { network: 'line', name: 'Line', icon: 'cib:line', color: '#00c300' },
                { network: 'linkedin', name: 'LinkedIn', icon: 'entypo-social:linkedin-with-circle', color: '#007bb5' },
                { network: 'telegram', name: 'Telegram', icon: 'cib:telegram', color: '#0088cc' },
                { network: 'twitter', name: 'Twitter', icon: 'entypo-social:twitter-with-circle', color: '#1da1f2' },
                { network: 'whatsapp', name: 'Whatsapp', icon: 'simple-icons:whatsapp', color: '#25d366' },
            ]
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
        .iconify {
            width: 100%;
            height: 60px;
        }
        a {
            box-sizing: border-box;
            display: block;
            width: 25%;
            margin-bottom: 20px;
        }
    }
    .v-bottom-sheet.v-dialog.v-bottom-sheet--inset {
        max-width: 430px;
    }
</style>