<template>
  <div class="home">
    <p>ホーム</p>
    <button @click="signOut()">ログアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    signOut() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>