<template lang="pug">
#detailBeer.modal.fade(tabindex='-1' aria-labelledby="detailBeerLabel" aria-hidden="true")
  .modal-dialog
    .modal-content
      .modal-header
        button.btn-close(type='button' data-bs-dismiss='modal' aria-label='Close')
      .modal-body
        .d-flex 
          .row.align-items-center 
            .col-3 
              img.w-100.h-50(:src="doc.image_url" style="object-fit:contain")
            .col-9 
              .row 
                h5 {{doc.name}}
              .row 
                span {{doc.description}}
        //- pre {{doc}}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  },
  props:{
    doc:Object,
  }
})
export default class detail extends Vue {
  doc!:any
  mounted() {
    console.log('doc',this.doc);
    
  }
}
</script>
