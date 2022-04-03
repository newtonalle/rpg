import Home from './pages/Home/Home.vue'
import NewPlayer from './pages/NewPlayer/NewPlayer.vue'


export default [
    { path: '/', alias: ['/home'], component: Home, name: 'home' },
    { path: '/new-player', component: NewPlayer, name: 'new-player' },
]
