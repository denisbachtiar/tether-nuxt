<template>
    <fragment>
        <v-skeleton-loader
        max-width="430"
        type="image"
        :tile="true"
        ></v-skeleton-loader>
        <v-container class="">
    <div class="d-flex mt-2 align-center">
      <div style="width: 50%; padding: 10px 10px 10px 0px; border-right: 1px solid rgb(245, 245, 245)">
        <v-skeleton-loader type="text" :tile="true"></v-skeleton-loader>
        <v-skeleton-loader type="text" :tile="true"></v-skeleton-loader>
      </div>
      <div class="" style="padding: 10px 0px 10px 10px; width: 50%;">
        <v-skeleton-loader type="list-item-avatar"></v-skeleton-loader>
      </div>
    </div>
  </v-container>
    <hr class="mt-2 mb-2">
    <v-container>
        <div class="d-flex align-center">
        <v-skeleton-loader type="text" width="50" :tile="true"></v-skeleton-loader>
        <v-skeleton-loader type="text" class="ml-auto" width="50" :tile="true"></v-skeleton-loader>
    </div>
    </v-container>
    <hr class="mt-2 mb-2">
    <v-skeleton-loader type="article" :tile="true"></v-skeleton-loader>
    </fragment>
</template>