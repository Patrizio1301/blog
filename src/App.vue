<template>
  <q-layout view="lHh Lpr fff" class="bg-grey-1">
    <q-header class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px; font-family: Bebas Neue, sans-serif">


        <div v-if="$q.screen.gt.sm" style="margin-left: 0px; font-size: 50px">

        <q-btn
      flat
      dense
      no-wrap
      color="black"
      no-caps
      label="Home"
      size="20px"
      class="q-ml-sm q-px-md"
      v-if="$q.screen.gt.sm"
      @click="navigateTo('home')"
    />
    <q-btn
      flat
      dense
      no-wrap
      color="black"
      no-caps
      size="20px"
      label="About"
      class="q-ml-sm q-px-md"
      v-if="$q.screen.gt.sm"
      @click="navigateTo('about')"
    />
    <q-btn
      flat
      dense
      no-wrap
      color="black"
      no-caps
      size="20px"
      label="Blog"
      class="q-ml-sm q-px-md"
      v-if="$q.screen.gt.sm"
      @click="navigateTo('blog')"
    />
    <q-btn
      flat
      dense
      no-wrap
      size="20px"
      color="black"
      no-caps
      label="Contact"
      class="q-ml-sm q-px-md"
      v-if="$q.screen.gt.sm"
      @click="navigateTo('contact')"
    />

        </div>



        <q-space />

        <div v-if="!$q.screen.gt.sm"  class="q-gutter-sm row items-center no-wrap">
          <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        side="right"
      v-model="leftDrawerOpen"
      bordered
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar">
          <q-toolbar-title class="row items-center text-grey-8">
            <span class="q-ml-sm">Patrizio Guagliardo</span>
          </q-toolbar-title>
        </q-toolbar>

        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" clickable class="GPL__drawer-item" @click="navigateTo(link.link)">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links3" :key="link.text" clickable class="GPL__drawer-item">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable class="GPL__drawer-item GPL__drawer-item--storage">
            <q-item-section avatar>
              <q-icon name="cloud" />
            </q-item-section>
            <q-item-section top>
              <q-item-label>Storage</q-item-label>
              <q-linear-progress :value="storage" class="q-my-sm" />
              <q-item-label caption>2.6 GB of 15 GB</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
      <router-view />

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: 'GooglePhotosLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const storage = ref(0.26)
    const router = useRouter();

    function navigateTo(routeName) {
      router.push({ name: routeName });
    }

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      navigateTo,
      search,
      storage,

      links1: [
        { icon: 'photo', text: 'Home', link: 'home', },
        { icon: 'photo_album', text: 'About', link: 'about',  },
        { icon: 'assistant', text: 'Blog', link: 'blog',  },
        { icon: 'people', text: 'Contact', link: 'contact',  }
      ],
      links2: [
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' }
      ],
      links3: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'Help & Feedback' },
        { icon: 'get_app', text: 'App Downloads' }
      ],
      createMenu: [
        { icon: 'photo_album', text: 'Album' },
        { icon: 'people', text: 'Shared Album' },
        { icon: 'movie', text: 'Movie' },
        { icon: 'library_books', text: 'Animation' },
        { icon: 'dashboard', text: 'Collage' },
        { icon: 'book', text: 'Photo book' }
      ],

      toggleLeftDrawer
    }
  }
}
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>