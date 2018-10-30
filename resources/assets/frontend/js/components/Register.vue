<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click="demo">
              Sign up
            </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Config from '@/env/config';

export default {
  name: "WdRegister",
  created() {

  },

    computed: {
        config(){
            return Config;
        }
    },

  methods: {
      demo: function () {
          console.log(this.config);
        const params = {
        title: "Test!",
        text: "test test test",
        onConfirm: () => {
          return this.alertFunc();
        }
      };

      this.$modal.show(params)
    },

    alertFunc: function() {
      alert('Hello!')
    }
  }
};
</script>