<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" aria-label="menu" @click="leftDrawerOpen = !leftDrawerOpen " />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon 
            class="header-icon q-pa-md lt-md"
            name="fa-solid fa-dove" 
            size="sm" 
            color="primary"
          />
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer 
      show-if-above 
      v-model="leftDrawerOpen" 
      :width="283"
      side="left" 
      bordered
      >
      <!-- drawer content -->
      <q-icon 
        class="q-pa-md"
        name="fa-solid fa-dove" 
        size="lg" 
        color="primary"
      />
      <q-list>
        <q-item 
          to="/"
          clickable
          v-ripple
          exact
          >
          <q-item-section avatar>
           <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item 
          to="/login"
          clickable
          v-ripple
          exact
          >
          <q-item-section avatar>
           <q-icon name="login" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Login</q-item-section>
        </q-item>
        <q-item 
          to="/user"
          clickable
          v-ripple
          exact
          >
          <q-item-section avatar>
           <q-icon name="person" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">User</q-item-section>
        </q-item>
        <q-item 
          to="/manager"
          clickable
          v-ripple
          exact
          >
          <q-item-section avatar>
           <q-icon name="face" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Manager</q-item-section>
        </q-item>
        <q-item 
          to="/admin"
          clickable
          v-ripple
          exact
          >
          <q-item-section avatar>
           <q-icon name="admin_panel_settings" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Admin</q-item-section>
        </q-item>
        <!-- table  -->

      </q-list>
     
    </q-drawer>

    

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default{
  data () {
    return{
      leftDrawerOpen :false,
      rightDrawerOpen: false

    }
  }
}
</script>

<style lang="sass">
.header-icon 
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>