<template>
  <v-app>
    <v-toolbar 
    app
    >
      <v-toolbar-title class="headline text-uppercase">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      app
      stateless
      value="true"
    >
    <v-list>
      
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>


      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
    <v-content>
          <router-view />
    </v-content>
    <Footer/>
    
  </v-app>
</template>

<script>
import Footer from '@/components/core/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      drawer: true,
      items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
      img: {
        href: "https://learn.x3english.com/wp-content/uploads/2018/01/00-x3english-80x.png",
        title: "Logo",
        height: "40px",
        width: "40px"
      },
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }
  }
}
</script>
