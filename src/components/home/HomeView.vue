<template>
   <Navbar/>
   <Banner/>
   <main>
      <div class="flex flex-row justify-center items-center">
         <div  class="w-full xl:w-3/12 md:w-1/2 h-1/4 shadow-sm bg-white hover:bg-slate-200 p-2 m-2 rounded" v-for="itemModule in listTeamForSale" :key="itemModule.id" @click="openModal(itemModule)"> 
           <div class="text-indigo-950 text-2xl">{{ itemModule.title }}</div> 
           <img class="m-auto h-12 w-12 mb-3" src="../../assets/logo.png"  alt="logo"/>
         </div>
      </div>
    
   </main>

   <ModalDetalleSolicitud v-bind:modalData="team" :modalShow="modal"/>
 
</template>


<script>
    import Banner from '../banner/Banner.vue';
    import Navbar from '../navbar/Navbar.vue';
    import ModalDetalleSolicitud from '../modals/ModalDetalleSolicitud.vue';

    export default {
    name:"HomeView",
    data: function () {
   return {
     listTeamForSale:[
      { id:"1", title:"Equipos", dsc:"Alquiler a"},
      { id:"2", title:"Equipos", dsc:"Alquiler b"},
      { id:"3", title:"Equipos", dsc:"Alquiler c"},
   ],
    team:{ id:"", dsc: "sadasd" },
    modal: false
   }
},
    components:{
      Navbar,
      Banner,
      ModalDetalleSolicitud
    },
    methods:{
      openModal: function() {
           this.team.dsc = "angel campillo cuadrado"
      }
    }
   }

</script>