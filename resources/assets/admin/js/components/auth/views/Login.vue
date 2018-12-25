<template>
    <div>
        <video autoplay muted loop id="myVideo">
          <source src="/dist/video/login2.mp4" type="video/mp4">
        </video>
        <div class="login-box content">
            <div class="login-logo">
                <b>MT</b>V
            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form>
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-8">
                            <div class="checkbox icheck">
                                <label>
                      <div
                        class="icheckbox_square-blue"
                        aria-checked="false"
                        aria-disabled="false"
                        style="position: relative;"
                      >
                        <input
                          type="checkbox"
                          style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                        >
                        <ins
                          class="iCheck-helper"
                          style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                        ></ins>
                      </div>Remember Me
                    </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-xs-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <div class="social-auth-links text-center">
                    <p>- OR -</p>
                    <a href="#" class="btn btn-block btn-social btn-facebook btn-flat">
                        <i class="fa fa-facebook"></i> Sign in using Facebook
                    </a>
                    <a href="#" class="btn btn-block btn-social btn-google btn-flat">
                        <i class="fa fa-google-plus"></i> Sign in using Google+
                    </a>
                </div>
                <a href="#">I forgot my password</a>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {};
        },

        methods: {
            // link() {
            //     return this.$router.push({
            //         path: '/admin/index'
            //     })
            // },
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial;
        font-size: 17px;
    }

    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .content {
        position: fixed;
        left: 37%;
        background: rgba(0, 0, 0, 0.5);
        color: #f1f1f1;
    }

    .login-box {
        width: 450px;
    }

</style>
