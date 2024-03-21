<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">Contact Us</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="wrapper">
            <div class="row no-gutters mb-5">
              <div class="col-md-7">
                <div class="contact-wrap w-100 p-md-5 p-4">
                  <h3 class="mb-4">Contact Us</h3>
                  <div id="form-message-success" class="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form
  action="https://formspree.io/f/xwkgnrov"
  method="POST"
>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="name">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="email">Email Address</label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="subject">Subject</label>
                          <input
                            type="text"
                            class="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="#">Message</label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            class="btn btn-primary"
                          />
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-5 mb-5">
                <div id="map"><iframe src="https://www.google.com/maps/d/embed?mid=1lhs71HbZ6S6cAR6VQVrpW2dolhw&hl=en&ehbc=2E312F" width="300" height="300" class="mb-5"></iframe></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-map-marker"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Address:</span> 31 Lifechoices Street Manenberg
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-phone"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Phone:</span>
                      <a href="tel://1234567920">074 950 0442</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Email:</span>
                      <a href="mailto:info@yoursite.com">tashyct14@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div
                    class="icon d-flex align-items-center justify-content-center"
                  >
                    <span class="fa fa-globe"></span>
                  </div>
                  <div class="text">
                    <p><span>Website</span> <a href="#">.....</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {};
</script>

<style>
section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.heading-section {
  text-align: center;
}

.wrapper {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

textarea.form-control {
  resize: vertical;
}

.btn-primary {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

#form-message-success {
  color: #28a745;
  font-weight: bold;
}

#form-message-warning {
  color: #dc3545;
  font-weight: bold;
}

.dbox {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.dbox .icon {
  font-size: 24px;
  color: #007bff;
}

.dbox .text {
  margin-top: 10px;
}
.dbox .text a {
  color: #007bff;
  text-decoration: none;
}

.dbox .text a:hover {
  text-decoration: underline;
}
</style>
  
  
