<template>
  <fragment>
  <p v-if="loading">LOADING.....</p>
  <v-app v-else>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item,i) in apiData.image" :key="i" :style="{'background-image': 'url(' + item.image + ')'}" @click.native="viewerShow(i)"></swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  </swiper>
  <p class="view"><span class="iconify" data-icon="ic:round-remove-red-eye" data-inline="false"></span> {{apiData.view}}</p>
  <v-container class="">
    <div class="d-flex mt-2 align-center">
      <div style="width: 50%; padding: 10px 10px 10px 0px; border-right: 1px solid rgb(245, 245, 245)">
        <p class="mb-1">Tanggal Activity<span class="float-right bold">{{$moment(apiData.date).format('DD MMM Y')}}</span></p>
        <p>Jam Activity<span class="float-right bold">{{$moment(apiData.date).format('HH:mm')}}</span></p>
      </div>
      <div class="d-flex align-center" style="padding: 10px 0px 10px 10px;">
        <img :src="apiData.avatar" width="48" height="48" class="round">
        <div class="ml-2">
          <p class="pop xs sbold gray-text" v-text="compareDays == 0 
          ? `Post: Hari ini, ${$moment(apiData.createdAt).format('HH:mm')}`
          : compareDays == -1 
          ? `Post: Kemarin, ${$moment(apiData.createdAt).format('HH:mm')}`
          : `Post: ${$moment(apiData.createdAt).format('DD MMM Y, HH:mm')}`"></p>
          <p class="bold">{{apiData.author_name}}</p>
        </div>
      </div>
    </div>
  </v-container>
  <hr class="mt-2 mb-2">
  <v-container class="d-flex">
    <div class="">
      <p class="gray-text"><span class="iconify" data-icon="ic:round-comment" data-inline="false"></span><span class="ml-2 pop sm">{{apiData.comment}}</span></p>
    </div>
    <div class="ml-auto">
      <p class="gray-text" @click="sheetNow()"><span class="iconify" data-icon="fa-solid:share-alt" data-inline="false"></span><span class="ml-2 pop sm">{{apiData.share}}</span></p>
    </div>
  </v-container>
  <hr class="mt-2 mb-2">
  <v-container>
    <p class="mb-2 sbold lg">{{apiData.title}}</p>
    <p class="mb-6" v-html="contentBR"></p>
    <!--MAPS-->
    <p class="mb-2 sbold lg" v-text="apiData.city_id == 0 ? 'Link Terkait':'Lokasi'"></p>
    <div style="background-color: #f2f2f2;
    padding: 10px;" v-if="apiData.city_id == 0"><p><a :href="apiData.link">{{apiData.link}}</a></p></div>
    <GMap
    v-if="loading == false && apiData.city_id != 0"
    ref="gMap"
    language="en"
    :center="{lat: apiData.lat, lng: apiData.long}"
    :zoom="14">
      <GMapMarker
        :position="{lat: apiData.lat, lng: apiData.long}"
      >
      </GMapMarker>
    </GMap>
    <p v-if="apiData.city_id != 0">{{this.address}}</p>
    <hr class="mt-3 mb-2">
    <p class="sbold lg mb-2">Peserta <span class="float-right">{{apiData.user_joined}}/{{userJoined}} Slot</span></p>
      <div class="d-flex align-center">
        <div style="width: 46px" class="ml-2" v-for="(item, index) in apiData.listjoined.slice(0,6)" :key="index">
          <img :src="item.user.avatar" height="45" width="100%" class="round"></img>
          <p class="pop light text-gray-100 xs mt-0 text-center">{{item.user.username.length <= 9 ? item.user.username:item.user.username.substring(0, 7)+'...'}}</p>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.b5g.tether" style="width: 46px;" class="ml-2"><span class="iconify joined" :data-icon="apiData.user_joined == 0 ? 'fa-solid:users':'bx:bxs-grid'" data-inline="false"></span><p class="light pop text-gray-100 xs mt-2 text-center" v-text="apiData.user_joined == 0 ? 'belum ada':'see all'"></p></a>  
      </div>
    <hr class="mt-3 mb-3">
  </v-container>
  <div style="background-color: rgb(245, 245, 245);" class="pt-1"></div>
  <v-container style="background-color: #FFF7E5;" class="pt-6 pb-6">
    <p class="sbold lg mb-1">Notes</p>
    <p>{{apiData.note.note}}</p>
  </v-container>
  <div style="background-color: rgb(245, 245, 245);" class="pt-1"></div>
  <!--COMMENT COMPONENT-->
  <Comment :listComment="apiData.listcomment"/>
  <BottomSheetShare/>
  <image-viewer-vue
        v-if="imageViewerFlag" 
        @closeImageViewer="imageViewerFlag = false" 
        :imgUrlList="imageList"
        title="image"
        :index="currentIndex"
        :closable="true"
        :cyclical="false">
  </image-viewer-vue>
  <v-bottom-navigation style="left: unset; color: white;" class="align-center" 
  :fixed="true" 
  background-color="#6197E1">
    <div>
        <p class="lg bold">{{userJoined}}<span class="ml-1 light">Slot</span></p>
        <p class="lg bold">{{apiData.user_joined}}<span class="ml-1 light">Joined</span></p>
    </div>
    <a class="ml-auto" href="https://play.google.com/store/apps/details?id=com.b5g.tether" style="width: 30%;"><img src="/playstore.png" style="vertical-align: middle;" width="100%"></a>
  </v-bottom-navigation>
  </v-app>
</fragment>
</template>

<script>
import Comment from '@/components/Comment'
import BottomSheetShare from '@/components/BottomSheetShare'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  // async asyncData({ $axios }) {
  //   const ip = await $axios.$get('http://prodapi.tether.co.id:8182/api/activity/Ajakan-main-Games-TopWar-Server-5551592067238803', {progress: true})

  //   return { apiData: ip.data, loading: false }
  // },
  components: {
    Swiper,
    SwiperSlide,
    Comment,
    BottomSheetShare
  },
  data () {
      return {
        loading: true,
        apiData: {},
        address: null,
        currentIndex: null,
        imageViewerFlag: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    created() {
      // this.geocoder
    },
    computed: {
      geocoder: function() {
        this.$axios.$get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.apiData.lat},${this.apiData.long}&key=AIzaSyDaYbdWKAZgyTRy_rFzr6UdRGNY_Emu3VE`).then(response => {
          // console.log(response.results[0].formatted_address)
          this.address = response.results[0].formatted_address
        })
      },
      contentBR: function() {
        return String(this.apiData.content).replace(/\n/g, "<br/>")
      },
      compareDays: function() {
        var deadline = new Date(this.apiData.createdAt).getTime();
        var dateNow = new Date().getTime();
        var day = 24*60*60*1000;
        var compare = Math.round((Math.round(deadline)-Math.round(dateNow))/day)
        return compare
      },
      userJoined: function() {
        if (this.apiData.slot == 0) {
          return 'unlimited'
        }
        else {
          return this.apiData.slot
        }
      },
      imageList: function() {
        var img = this.apiData.image.map((val) => {
          return val.image
        })
        return img
      }
    },
    methods: {
      sheetNow() {
          const thisBss = this.$root.$refs.BottomSheetShare
          thisBss.title = this.apiData.title
          thisBss.sheet = !thisBss.sheet
          // alert(sheet)
      },
      viewerShow(i) {
          this.imageViewerFlag = true
          this.currentIndex = i
      }
    },
    mounted() {
        const urlID = this.$nuxt.$route.params.id
      this.$axios.$get(`http://prodapi.tether.co.id:8182/api/activity/${urlID}`)
      .then(response => {
        // console.log(response.data)
        this.apiData = response.data
        this.loading = false
        this.geocoder
      }).catch(error => {
        if (this.$axios.isCancel(error)) {
          console.log('Request canceled', error)
        } else {
          // handle error
        }
      })
    },
}
</script>

<style lang="scss">
.view {
    position: absolute;
    z-index: 4;
    color: white;
    right: 10px;
    top: 10px;
}
.GMap__Wrapper {
  height: 100px;
}
.swiper {
  height: 190px;
  width: 100%;

  .swiper-slide {
    display: flex;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
  }
}
</style>
