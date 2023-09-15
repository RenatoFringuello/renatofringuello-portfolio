<template>
  <header class="fixed-top bg-accent">
    <nav class="navbar navbar-dark navbar-expand-lg">
      <div class="container-fluid">

        <!-- brand -->
        <router-link class="navbar-brand" to="/">Logo</router-link>

        <!-- hamburger button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <!-- dropdown | link -->
            <li class="nav-item dropdown" v-for:="(link, i) in links" @click="activeLinkId = i">
              
              <!-- dropdown -->
              <div v-if="isDropdown(link.subLinks.length)">
                <!-- dropdown name -->
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ link.name.toLocaleUpperCase() }}
                </a>

                <!-- dropdown links -->
                <ul class="dropdown-menu dropdown-menu-dark bg-accent border-">
                  <li v-for:="sLink in link.subLinks">
                    <router-link class="dropdown-item" :to="sLink.path">
                      <i class="icon" :class="sLink.icon"></i>
                      {{ sLink.name.toLocaleUpperCase() }}
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- link -->
              <router-link v-else class="nav-link" :class="isActive(i)" :to="link.path">{{ link.name.toLocaleUpperCase() }}</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      activeLinkId : 0,
      links:[
        {
          name:'home',
          path:'/',
          subLinks:[]
        },
        {
          name:'projects',
          path:'/projects',
          subLinks:[
            {
              name:'top rated',
              icon:'fa-solid fa-star',
              path:'/projects&filter=top'
            },
            {
              name:'latest',
              icon:'fa-solid fa-bolt',
              path:'/projects&filter=latest'
            },
          ]
        },
        {
          name:'about me',
          path:'/about',
          subLinks:[]
        },
      ]
    }
  },
  computed:{
    /**
    * return 'active' if need that class or false as boolean value.
    */
    isActive(){
      return (i)=>{
        return this.activeLinkId === i ? 'active' : false
      }
    },
     /**
     * return 'dropdown' if need that class or false as boolean value.
     * 
     * This computed is useful to assign a class AND to check if it's a dropdown menu or not
     * because in the last scenario 'dropdown' is not equal as false or 0
     */
     isDropdown(){
      return (subLinksCount) => {
        return subLinksCount !== 0 ? 'dropdown' : false 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  z-index: 1;

  .icon{
    width: 20px;
  }
}
</style>
