<template lang="pug">
.container-fluid.p-0.m-0
  .d-flex.align-items-center.bg-black.text-white
    img.logo.m-2(src="@/assets/logo.png")
    span 
      u Beer
  .row.p-3
    .col-4.text-center.my-3(v-for="item,index in docs")
      a(@click="selectItem = item;" data-bs-toggle='modal' data-bs-target='#detailBeer')
        .d-flex.justify-content-center.container.beer
          .row.w-100.justify-content-center.align-items-center
            img.beer.w-50.h-50(:src="item.image_url")
            span {{item.name}}
  .d-flex.justify-content-center
    paginate(:page="page" :pages="pages" :show="show" :total="total" @change="page=$event; fetchData()")
  //- pre {{selectItem}}
  detail(:doc="selectItem")

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import detail from '@/components/detail.vue';
import paginate from '@/components/paginate.vue';
import axios from "axios";

@Options({
  components: {
    detail,
    paginate
  },
})
export default class HomeView extends Vue {
  docs:Array<any> = []
  selectItem:any = {}
  page =  1
  pages: number = 0;
  show = 6 

  mounted() {
    this.fetchData();
  }
  fetchData() {
    axios.get(`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.show}`).then((response)=>{
      console.log('response',response);
      this.docs = response.data
      this.pages = response.data.length;
    })
  }
}
</script>
<style lang="scss">
img.logo {
  width: 2em;
}
.container.beer {
  border: solid lightgrey 1px;
  height: 20em;
  img.beer {
    object-fit: contain;
  }
}
</style>
