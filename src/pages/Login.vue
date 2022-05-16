<template>
<q-page>
  <div id="q-app" class="column items-center q-pa-md q-gutter-md">
    <q-card style="width: 50%" class="absolute-center ">
      <q-card-section class="bg-blue-4">
        <div class="text-h5">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input
          ref="email"
          v-model="loginForm.email"
          label="Email Address"
          type="email"
          @blur="updateEmailVerification" 
          :error="showError"
          >
          <template v-slot:error>
            Enter a valid email.
          </template>
        </q-input>
        <q-input
          v-model="loginForm.password"
          label="Password"
          :type="loginForm.isPwd ? 'password' : 'text'"
        >
        </q-input>
      </q-card-section>
      <q-card-actions class="row justify-between">
        <q-btn
          @click="changePassword()"
          color="primary"
          label="Change Password"
        >
        </q-btn>
        <q-btn 
          @click="login()" 
          color="primary" 
          label="login"
        >
          </q-btn>
      </q-card-actions>
    </q-card>
</div>
</q-page>
</template>

<script>
export default {
    name: 'Login',
    data () {
   return {
      loginForm: {
        email: '',
        isPwd: true,
        password: '',
      },
      emailValid: false,
      showError: false
    }
  },
  methods: {
    updateEmailVerification () {
      let reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.loginForm.email)

  if (valid) {
        console.log('email is valid')
        this.emailValid = true
        this.showError = false
      } else {
        console.log('email invalid')
        this.emailValid = false
        this.showError = true
      } 
    },
    changePassword() {
     
    },
    login(){

    }
  }
}
</script>

<style>

</style>
