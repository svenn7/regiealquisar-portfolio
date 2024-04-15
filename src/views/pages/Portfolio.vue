<template>
    <!-- teams section start -->
    <section class="portfolio" id="portfolio">
       <div class="max-width">
           <h2 class="title">My portfolio</h2>
           <div class="carousel owl-carousel">
               <router-link :to="{ name: 'project1' }" class="card">
                   <div class="box">
                       <img src="frontend/images/project1.jpg" alt="">
                       <div class="text">House of the Green Dragon Logo</div>
                       <p>This logo designed to inspire unity among its members during HM Days at Cordova Public College</p>
                   </div>
               </router-link>
               <router-link :to="{ name: 'project2' }" class="card">
                   <div class="box">
                       <img src="frontend/images/project2.jpg" alt="">
                       <div class="text">Phoenix Rising Logo</div>
                       <p>This logo embodies the resilience and renewal of Cordova Public College responders, ensuring safety and support in times of need.</p>
                   </div>
               </router-link>
               <router-link :to="{ name: 'project3' }" class="card">
                   <div class="box">
                       <img src="frontend/images/project3.jpg" alt="">
                       <div class="text">Cookiebie Logo</div>
                       <p>"Cookiebies—where every bite is a journey back to sweet, homestyle indulgence."</p>
                   </div>
               </router-link>
               <router-link :to="{ name: 'project4' }" class="card">
                   <div class="box">
                       <img src="frontend/images/cpc.png" alt="">
                       <div class="text">Offense Monitoring System</div>
                       <p>A Web based Offense Monitoring System in Cordova Public College.</p>
                   </div>
               </router-link>
           </div>
       </div>
   </section>
</template>

<script>
export default {
   Name:'Porfolio',

};

</script>

<style>

</style>
