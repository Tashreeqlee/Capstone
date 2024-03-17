<template>
  <div class="background_bg">
  <div class="banner_section layout_padding">
            <div id="main_slider" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container">
                        <h1 class="banner_taital">Dazzle District</h1>
                        <p class="banner_text">Welcome to Dazzle District, where elegance meets innovation in the
              world of fine jewelry.</p>
                        <div class="read_bt"><a href="/products">Buy Now</a></div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <h1 class="banner_taital">Watchs</h1>
                        <p class="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <div class="read_bt"><a href="#">Buy Now</a></div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="container">
                        <h1 class="banner_taital">Watchs</h1>
                        <p class="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <div class="read_bt"><a href="#">Buy Now</a></div>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i class="fa fa-plus" style="font-size:24px; color: #fff;"></i>
               </a>
               <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i class="fa fa-minus" style="font-size:24px;  color: #fff;"></i>
               </a>
            </div>
         </div>
        </div>
      
          
</template>

<script>


export default {

  components: {
  }
}
</script>

<style>
.banner_section {
    width: 100%;
    float: left;
    padding-bottom: 90px;
}

.banner_taital {
    width: 100%;
    float: left;
    font-size: 80px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
}

.banner_text {
    width: 40%;
    margin: 0 auto;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
}

.read_bt {
    width: 170px;
    margin: 0 auto;
    text-align: center;
}
.read_bt a {
    width: 100%;
    float: left;
    font-size: 16px;
    color: #ffffff;
    background-color: #b60213;
    text-align: center;
    padding: 10px 0px;
    border-radius: 30px;
    margin-top: 50px;
    font-weight: bold;
}
.read_bt a:hover{
    background-color: #ffffff;
    color: #000;
}

#main_slider a.carousel-control-prev {
    position: absolute;
    left: 120px;
    top: 25%;
}
#main_slider a.carousel-control-next {
    position: absolute;
    right: 120px;
    top: 25%;
}
#main_slider .carousel-control-prev, 
#main_slider .carousel-control-next {
    width: 65px;
    height: 65px;
    border: 2px solid #ffffff;
    background: transparent !important;
    opacity: 1;
    font-size: 30px;
    color: #ffffff;
    font-weight: bold;
    border-radius: 100%;
}

/* background bg section start */
.background_bg{
    width: 100%;
    float: left;
    background-image: url(https://i.ibb.co/PtNjVXc/84e70dc2dd8be501f186dd091765756f.jpg);
    height: auto;
}

</style>
