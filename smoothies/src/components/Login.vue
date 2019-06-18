<template>
    
    <div class="container">
        <div id="firebaseui-auth-container">LOGIN SCREEN</div>
        <button class="btn-large" @click="socialLogin">
            LOGIN FOR REAL
        </button>
    </div>

</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$router.push( { name: 'Index' } )
                }).catch((err) => {
                    console.log(err.message)
                })
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    this.$router.push( { name: 'Index' } )
                }).catch((err) => {
                    console.log(err.message)
                })
        }
    }
}
</script>
