<template>
  <div class="signup">
      <div>
        <label for="email">メールアドレス：</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div>
        <label for="password">パスワード：</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <button @click="signUp()">新規登録</button>

      <p>
        すでに会員登録が終わっていますか？
        <router-link to="/">ログイン</router-link>
      </p>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>