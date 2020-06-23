<template>
    <fragment>
        <v-container class="pb-3 mb-12">
            <p class="sbold mt-2 mb-3">Komentar</p>
                <div class="d-flex mb-2" v-for="(item, index) in listComment" :key="index">
                    <img :src="item.user.avatar" height="27" width="27" class="round"></img>
                    <div style="background-color: #F3F3F3; width: 100%; padding: 10px; border-radius: 5px" class="ml-2">
                        <p class="sbold mb-1">{{item.user.username}}<span class="pop sm float-right" style="color: #8A8A8A">{{$moment(item.createdAt).format('DD MMM Y')}}</span></p>
                        <p>{{item.comment}}</p>
                    </div>
                </div>
        </v-container>
    </fragment>
</template>

<script>
export default {
    props: {
        listComment: Array
    }
}
</script>