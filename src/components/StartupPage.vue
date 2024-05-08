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

<style scoped src="./QuickTicketsPage.css"></style>
