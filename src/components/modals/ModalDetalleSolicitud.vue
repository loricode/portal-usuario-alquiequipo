<template>
  
  <div class="text-black">{{ modalShow ? "wd" : "fsadalse" }}</div>

  <div class="text-black">
    {{ modalData.dsc }}
  </div>

</template>

<script>
export default {
   name:"ModalDetalleSolicitud",
   props: {
      modalShow: Boolean,
      modalData: Object
  }
}
</script>