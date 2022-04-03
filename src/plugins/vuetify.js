import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:
        {
            light:
            {
                primary: '#002642',
                secondary: '#677DB7',
                accent: '#D9DCD6',
                error: '#BA1200',
            }
        }
    }
});
