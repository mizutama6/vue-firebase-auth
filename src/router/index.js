import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Home from '../views/Home'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(recode => recode.meta.requireAuth); // 認証が必要かどうかの真偽値
  if (requireAuth) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) { // ログインしていたらリクエスト通り移動
        next();
      } else { // ログインしていなかったらログイン画面へ強制移動
        next('/');
      }
    });
  } else { // そもそも認証が必要なかったらリクエスト通り移動
    next();
  }
})

export default router