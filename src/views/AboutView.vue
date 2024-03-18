<template>
  <div class="bgcolor">
    <div class="position-relative overflow-hidden text-center" id="hero">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-3 text-animation">About Us</h1>
      </div>
    </div>

    <div class="container py-4">
      <div class="row-align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 m-4 text-dark rounded-3">
            <h1 class="red">What is Dazzle District?</h1>
            <p>
              Welcome to Dazzle District, where elegance meets innovation in the
              world of fine jewelry. At Dazzle District, we believe that every
              piece of jewelry tells a unique story, reflecting the
              individuality and style of its wearer. Our exquisite collections
              are crafted with precision and passion by skilled artisans, using
              only the finest materials sourced from around the globe. From
              classic designs that stand the test of time to avant-garde
              creations that push the boundaries of conventional beauty, Dazzle
              District offers a diverse range of jewelry to suit every taste and
              occasion. Whether you're searching for the perfect engagement ring
              to symbolize your love, a statement necklace to elevate your
              evening ensemble, or a timeless pair of earrings to add a touch of
              glamour to your everyday look, you'll find it all and more at
              Dazzle District. We are committed to providing our customers with
              an exceptional shopping experience, offering personalized service
              and expert guidance every step of the way. With our dedication to
              quality craftsmanship, exquisite design, and unparalleled customer
              care, Dazzle District is your premier destination for luxurious
              jewelry that inspires and enchants. Discover the magic of Dazzle
              District today and adorn yourself in brilliance.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="h-100 p-5 m-4 rounded-3">
            <img
              id="img-1"
              src="https://i.ibb.co/tQXn3x5/Screenshot-2024-03-07-143739.png"
            />
          </div>
        </div>
      </div>
      <div class="row-align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 m-4 rounded-3">
            <img
              id="img-2"
              src=""
              loading="lazy"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="h-100 p-5 m-4 text-dark rounded-3">
            <h1 class="red">Software Tuning</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut, nam quam placeat aliquid laboriosam accusantium dicta dolor, accusamus necessitatibus asperiores deserunt quibusdam architecto aspernatur minima optio tenetur officia corporis!
            </p>
          </div>
        </div>
      </div>

      <div class="row-align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 m-4 text-dark rounded-3">
            <h1 class="red">Accessories</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quas eius saepe iste sapiente sit magnam voluptatum corporis! Possimus illo, repudiandae rerum odit a architecto quod sapiente similique dolore tenetur.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="h-100 p-5 m-4 rounded-3">
            <img
              id="img-3"
              src=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="position-relative overflow-hidden text-center" id="hero">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-3">Meet Our Mascots</h1>
      </div>
    </div>

    <div class="row-align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <p class="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia ut ea quasi officiis possimus adipisci quod, optio ipsam hic eaque, numquam rem eligendi, accusamus ducimus soluta neque cupiditate a!
          </p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img
            class="img-4"
            src=""
          />
        </div>
      </div>
    </div>
    <div class="row-align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img
            class="img-5"
            src=""
          />
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <p class="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur hic doloribus cupiditate, obcaecati fuga officia ratione quaerat, soluta molestias corporis natus, deserunt veritatis sapiente possimus minima magni ipsa ex.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.bgcolor {
  background-image: #8ca1d1;
}
#hero {
  background-color: black;
  color: white;
}

.row-align-items-md-stretch {
  display: flex;
  align-items: center;
  justify-content: center;
}

#img-1,
#img-2 {
  height: 320px;
  width: 350px;
}
#img-3 {
  width: 350px;
}

.img-5 {
  width: 500px;
}
.img-4 {
  width: 600px;
}
#img-1:hover,
#img-2:hover,
#img-3:hover,
.img-4:hover,
.img-5:hover {
  transform: scale(1.1);
}

.text-black {
  font-size: xx-large;
}

.red {
  color: red;
}
.red:hover {
  transform: scale(1.1);
}
.text-animation {
  overflow: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Responsiveness */

@media screen and (max-width: 900px) {
  .row-align-items-md-stretch {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #img-1,
  #img-2,
  #img-3 {
    height: 320px;
    width: 350px;
  }

  .img-4,
  .img-5 {
    width: 250px;
  }
}
@media screen and (max-width: 800px) {
  .row-align-items-md-stretch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #img-1,
  #img-2,
  #img-3 {
    height: 270px;
    width: 300px;
  }

  .img-4,
  .img-5 {
    width: 200px;
  }
}
@media screen and (max-width: 400px) {
  .row-align-items-md-stretch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #img-1,
  #img-2,
  #img-3 {
    height: 120px;
    width: 150px;
  }

  .img-4,
  .img-5 {
    height: 150px;
    width: 150px;
  }
}
</style>