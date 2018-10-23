<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-form ref="form" @submit.prevent="validateBeforeSubmit" lazy-validation>
        <v-text-field v-model="loginForm.Name" v-validate="'required|alpha_spaces'" prepend-icon="person" label="Name" name="name"></v-text-field>
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        <v-text-field v-model="loginForm.Email" v-validate="'required|email'" prepend-icon="email" label="E-mail" name="email"></v-text-field>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
        <v-select v-model="loginForm.selectBox" v-validate="'required'" :items="selectBoxOptions" label="Item" name="selectbox"></v-select>
        <span v-show="errors.has('selectbox')">{{ errors.first('selectbox') }}</span>
        <v-checkbox v-model="loginForm.checkBox" label="Do you agree?" name="checkbox"></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn type="submit" @click='login'>
          submit
        </v-btn>
        <v-btn @click='clear'>clear</v-btn>
      </v-form>
    </v-flex>
    <snackbar :config="snackbarSettings"></snackbar>
  </v-layout>
</template>

<script>
import Utility from '../services/Utility'
import Config from '../services/Config'
import snackbar from '../components/snackbar.vue'

export default {
  components: {
    snackbar
  },
  data: function() {
    return {
      loginForm: {},
      selectBoxOptions: ['deji', 'muyiwa', 'mr fikayo'],
      buttonDisabled: false,
      buttonText: 'Login'
    }
  },
  layout: 'default',
  computed: {
    vm() {
      return Utility.parseVueData(this.$data)
    },
    snackbarSettings() {
      return this.$store.state.globalSnackbarSettings
    }
  },
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    login() {
      console.log(this.vm.loginForm)

      //   this.$validator.validate().then(async result => {
      //     if (result) {
      //       this.buttonDisabled = true;
      //       try {
      //         const loginResponse = await this.$axios.$post(
      //           Config.end_points.login,
      //           this.vm.loginForm
      //         );
      //         this.buttonDisabled = false;
      //         console.log(loginResponse);
      //         let user = loginResponse.data;
      //         //Save User in Localstorage
      //         localStorage.setItem(
      //           Config.local_storage.user,
      //           JSON.stringify(user)
      //         );
      //         //Go to account page
      //         this.$store.commit(Config.mutations.global.SET_USER, user);
      //         this.$router.push({ path: "/profile" });
      //       } catch (error) {
      //         this.buttonDisabled = false;
      //         console.log(error);
      //         this.$showSnackBar({
      //           show: true,
      //           timeout: 3000,
      //           message: error.message,
      //           color: Config.base_colors.error
      //         });
      //       }
      //     } else {
      //       this.$showSnackBar({
      //         show: true,
      //         timeout: 3000,
      //         message: "Errors in your form",
      //         color: Config.base_colors.error
      //       });
      //     }
      //   });
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$showSnackBar({
            show: true,
            timeout: 3000,
            message: 'Congrats',
            color: Config.base_colors.success
          })
          return
        }
        this.$showSnackBar({
          show: true,
          timeout: 3000,
          message: 'failed',
          color: Config.base_colors.error
        })
      })
    }
  }
}
</script>
