<template>
  <v-container class="register-container">
    <v-card class="card mx-auto" max-width="400">
      <v-card-title class="headline">Kayıt Ol</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="E-posta" v-model="email" prepend-icon="mdi-email"></v-text-field>
          <v-text-field label="Şifre" v-model="password" type="password" prepend-icon="mdi-lock"></v-text-field>
          <v-text-field label="Şifreyi Onayla" v-model="confirmPassword" type="password" prepend-icon="mdi-lock"></v-text-field>
          <v-btn class="button-primary mt-4" @click="register">Kayıt Ol</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="button-secondary" text to="/login">Giriş Yap</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
      // Kayıt işlemleri burada yapılacak
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Confirm Password:', this.confirmPassword);
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f8ff;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button-primary {
  background: #54a0ff;
}

.button-primary:hover {
  background: #2e86de;
}

.button-secondary {
  color: #54a0ff;
}

.button-secondary:hover {
  color: #2e86de;
}
</style>
