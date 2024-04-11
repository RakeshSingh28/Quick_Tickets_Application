<template>
  <div class="startup__area">
    <header>
      <div class="logo-container">
        <img src="@/assets/quick-tickets.png" width="40" height="40" alt="Quick Tickets">
        <div class="logo">Quick Tickets</div>
      </div>
      <nav>
        <ul>
          <li><a class="btn" href="#/quick-tickets/signin">Sign in</a></li>
          <li><a class="btn startup__signup--btn" href="#/quick-tickets/signup">Sign up</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-text">
          <h1>Book Your Flight Tickets</h1>
          <p>Embark on unforgettable journeys. Seamlessly secure your travel arrangements with our intuitive platform.</p>
          <a class="btn hero-btn">GET STARTED →</a>
        </div>
        <div class="carousel-container">
          <v-carousel :continuous="true" :cycle="true" hide-delimiters show-arrows-on-hover>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </div>
      </section>
    </main>

    <footer>
      <div>© 2024 Quick Tickets. All Rights Reserved.</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'StartupPage',
  data: () => ({
      items: [
          {src: 'https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-d-rendering-of-yellow-airplane-and-search-bar-for-easy-tourism-image_13563282.png'},
          {src: 'https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-online-booking-travel-essentials-mobile-phone-suitcase-boarding-pass-and-airplane-image_3897736.jpg'},
          {src: 'https://png.pngtree.com/thumb_back/fh260/background/20231003/pngtree-convenient-online-airline-ticket-booking-with-search-bar-and-vibrant-yellow-image_13566143.png'},
          {src: 'https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-online-tourism-and-travel-booking-find-airline-tickets-with-convenient-search-image_13566141.png'},
        ],
  }),
};
</script>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: #fff;
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
  color: #fff;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #007bff;
}

main {
  padding: 20px;
  margin-bottom: 221px;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.hero-text {
  max-width: 500px;
}

.hero-text h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #fff;
}

.hero-text p {
  color: #fff;
  line-height: 1.5;
}

.hero-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.hero-btn:hover {
  background-color: #0056b3;
}

.startup__signup--btn {
  padding: 8px;
  border: 1px solid;
  border-radius: 5px;
}

.carousel-container {
  width: 50%;
}

footer {
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

.startup__area {
  background-image: url("https://w.forfun.com/fetch/05/058d30394bb54b92f46beed212779e91.jpeg");
  background-repeat: repeat;
  background-size: cover;
  position: relative;
}
</style>