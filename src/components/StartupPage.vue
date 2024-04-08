<template>
  <div>
    <header>
        <div class="d-flex startup__title">
        <img src="@/assets/quick-tickets.png" width="40" height="40" alt="Quick Tickets"> 
      <div class="logo">Quick Tickets</div>
        </div>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">SERVICE</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#/quick-tickets/signup">Sign up</a></li>
          <li><a href="#/quick-tickets/signin">Sign in</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-text">
          <h1>Book Your Tickets</h1>
          <p>Embark on unforgettable journeys. Seamlessly secure your travel arrangements with our intuitive platform.</p>
          <a href="#">GET STARTED →</a>
        </div>
        <div class="hero-image">
          <img src="[Imagen of Phone with airplane icon]" alt="Phone with airplane icon">
        </div>
      </section>

      <section class="booking">
        <h2>BOOK NOW</h2>
        <div class="boarding-pass">
          <div class="company-name">Quick Tickets</div>
          <barcode></barcode>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2024 Quick Tickets</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'StartupPage',
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.startup__title{
    width: 200px;
    align-items: center;
    justify-content: space-around;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}

main {
  flex: 1;
  padding: 20px;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-text {
  max-width: 500px;
}

.hero-text h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.hero-image {
  width: 400px;
}

.booking {
  text-align: center;
  margin-top: 50px;
}

.booking h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.boarding-pass {
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.company-name {
  font-weight: bold;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>