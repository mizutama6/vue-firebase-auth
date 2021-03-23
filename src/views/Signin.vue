<template>
  <div class="signin">
      <div>
        <label for="email">メールアドレス：</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div>
        <label for="password">パスワード：</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <button @click="signIn()">ログイン</button>

      <p>
        会員登録がまだですか？
        <router-link to="/signup">新規登録</router-link>
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
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/home');
      })
      .catch(err => {
        if(err.code === 'auth/wrong-password') {
          alert('パスワードが違います。');
        }
        console.log(err);
      });
    }
  }
}
</script>