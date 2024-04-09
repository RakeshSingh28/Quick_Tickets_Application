<template>
  <div>
    <header>
        <div class="d-flex startup__title">
        <img src="@/assets/quick-tickets.png" width="40" height="40" alt="Quick Tickets">
      <div class="logo">Quick Tickets</div>
        </div>
      <nav>
        <ul>
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
          <li><a>PRODUCTS</a></li>
          <li><a>SERVICE</a></li>
          <li><a>CONTACT</a></li>
          <li><a href="#/quick-tickets/signup">Sign up</a></li>
          <li><a href="#/quick-tickets/signin">Sign in</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-text">
          <h1>Book Your Flight Tickets</h1>
          <p>Embark on unforgettable journeys. Seamlessly secure your travel arrangements with our intuitive platform.</p>
          <a>GET STARTED →</a>
        </div>
        <v-carousel
        :continuous="true"
        :cycle="true">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="scroll-x-transition"
            transition="scroll-x-transition"
            ></v-carousel-item>
        </v-carousel>
      </section>

      <section class="booking">
        <h2>BOOK NOW</h2>
        <div class="boarding-pass">
          <div class="company-name">Quick Tickets</div>
        </div>
      </section>
    </main>

    <footer>
      <div>© 2024 Quick Tickets</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'StartupPage',
  data: () => ({
      items: [
          {
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-d-rendering-of-yellow-airplane-and-search-bar-for-easy-tourism-image_13563282.png',
          },
          {
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-online-booking-travel-essentials-mobile-phone-suitcase-boarding-pass-and-airplane-image_3897736.jpg',
          },
          {
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20231003/pngtree-convenient-online-airline-ticket-booking-with-search-bar-and-vibrant-yellow-image_13566143.png',
          },
          {
            src: 'https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-online-tourism-and-travel-booking-find-airline-tickets-with-convenient-search-image_13566141.png',
          },
        ],
  }),
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

.booking {
  text-align: center;
  margin-top: 179px;
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
  text-align: center;
}
</style>