<template>
  <v-container class="login-container">
    <v-card class="card mx-auto" max-width="400">
      <v-card-title class="headline">Giriş Yap</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="E-posta" v-model="email" prepend-icon="mdi-email"></v-text-field>
          <v-text-field label="Şifre" v-model="password" type="password" prepend-icon="mdi-lock"></v-text-field>
          <v-btn class="button-primary mt-4" @click="login">Giriş Yap</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="button-secondary" text to="/register">Hesap Oluştur</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Basic validation
      if (this.email === 'bookwormzn@gmail.com' && this.password === 'zeynep') {
        // Open a new window with styled content
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  background-color: #f0f8ff;
                  font-family: 'Calibri', sans-serif;
                }
                h1 {
                  font-size: 3em;
                  text-align: center;
                  color: #333;
                }
                img {
                  width: 300px;
                  height: auto;
                  margin-bottom: 20px;
                }
              </style>
            </head>
            <body>
              <img src="C:\\Users\\ZEYNEP BÖLÜKBAŞI\\OneDrive\\Masaüstü\\Vue-login\\authpage\\src\\assets\\photo.jpg" alt="Funny Cat"/>
              <h1>You can do it</h1>
            </body>
          </html>
        `);
        newWindow.document.close();
      } else {
        alert('Geçersiz e-posta veya şifre.');
      }
    }
  }
}
</script>

<style scoped>
.login-container {
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
