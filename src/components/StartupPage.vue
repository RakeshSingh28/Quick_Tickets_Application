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
      <v-row class="hero">
        <v-col cols="6" :class="$vuetify.breakpoint.smAndDown ? 'hero-text' : ''" class="hero-style">
          <h1>{{ $t("common.target.phrase") }}</h1>
          <p>{{ $t("common.target.phrase.description") }}</p>
          <a class="btn hero-btn" href="#/quick-tickets/signup"
            >{{ $t("common.get.started") }} →</a
          >
        </v-col>
        <v-col cols="6" :class="$vuetify.breakpoint.smAndDown ? 'hero-carousel' : ''">
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
        </v-col>
      </v-row>
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
        src: "https://wallpapers.com/images/hd/sunset-shot-of-airplane-4k-zqwx0kbvdu5xwj39.jpg",
      },
      {
        src: "https://m.media-amazon.com/images/I/71YMeHTzeXL.jpg",
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
