<template lang="pug">
nav(aria-label='Page navigation example')
  ul.pagination
    li.page-item(@click="updatePaginate(page-1)" v-if="page!=1")
      a.page-link(v-if="page!=1") Previous
    template(v-for="(item,index) in paginate")
      li.page-item(v-if="index>page-limit&&index<page+limit")
        a.page-link(:class="{'active':(index==(page-1))}" @click="updatePaginate(index+1)") {{index+1}}
    li.page-item(@click="updatePaginate(page+1)" v-if="page!=pages")
      a.page-link(v-if="page!=pages") Next
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  },
  props:{
    page:Number,
    pages:Number,
    total:Number,
    show:Number,
    "onUpdate:modelValue": Function,
    modelValue: Object,
  }
})
export default class detail extends Vue {
  page!:number
  pages!:number
  total!:number
  show!:number
  limit:number = 6
  updatePaginate(i: number) {
    if(i>=1&&i<=this.pages)
      this.$emit('change',i)
  }
  get paginate() {
    let arr = new Array(this.pages).fill(0);
    return arr;
  }
}
</script>