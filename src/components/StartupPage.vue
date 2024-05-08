<template>
  <div class="startup__area">
    <header>
      <div class="logo-container">
        <img
          src="@/assets/quick-tickets.png"
          width="40"
          height="40"
          alt="Quick Tickets"
        />
        <div class="logo">{{ $t("common.quick.tickets") }}</div>
      </div>
      <nav>
        <ul>
          <li>
            <a class="btn" href="#/quick-tickets/signin">{{
              $t("common.sign.in")
            }}</a>
          </li>
          <li>
            <a class="btn startup__signup--btn" href="#/quick-tickets/signup">{{
              $t("common.sign.up")
            }}</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-text">
          <h1>{{ $t("common.target.phrase") }}</h1>
          <p>{{ $t("common.target.phrase.description") }}</p>
          <a class="btn hero-btn" href="#/quick-tickets/signup"
            >{{ $t("common.get.started") }} →</a
          >
        </div>
        <div class="carousel-container">
          <v-carousel
            :continuous="true"
            :cycle="true"
            hide-delimiters
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </section>
    </main>

    <footer>
      <div>
        {{
          $t("common.rights.assurance", {
            currentYear: new Date().getFullYear(),
          })
        }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "StartupPage",
  data: () => ({
    items: [
      {
        src: "https://wallpapers.com/images/featured/4k-plane-background-nyp57gekd7c1l5ri.jpg",
      },
      {
        src: "https://wallpapers.com/images/hd/sunset-silhouette-airplane-brh2gmlmjhnj74dv.jpg",
      },
      {
        src: "https://getwallpapers.com/wallpaper/full/e/a/c/1454928-beautiful-airplane-wallpaper-1920x1200.jpg",
      },
      {
        src: "https://uhdwallpapers.org/download/delta-aircraft-on-jfk-airport_96974/1920x1080/",
      },
    ],
  }),
};
</script>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  min-height: calc(100vh - 144px);
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
  background-image: url("https://wallpapers.com/images/hd/beach-sunset-hd-pbw8evzrrekzddkt.jpg");
  background-repeat: repeat;
  background-size: cover;
  position: relative;
}
</style>
