import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-home',
      path: '/admin/dashboard'
    },
    {
      name: 'Detailed View',
      icon: 'ti-map-alt',
      path: '/admin/detail'
    }
    // {
    //   name: 'Icons',
    //   icon: 'ti-pencil-alt2',
    //   path: '/admin/icons'
    // }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}
const SidebarPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
