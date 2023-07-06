/*import { createRouter, createWebHistory } from 'vue-router';

// Importez les composants que vous souhaitez associer à des routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;*/
import { createRouter, createWebHistory } from 'vue-router';

// Importez les composants depuis votre dossier "components"
import HomePage from '../views/HomePage.vue';
import AddContact from '../views/AddContact.vue';
import ContactManager from '../views/ContactManager.vue';
import EditContact from '../views/EditContact.vue';
import ViewsContact from '../views/ViewsContact.vue';
import PageNoteFound from '../views/PageNoteFound.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    redirect: '/contacts',
    component: HomePage
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewsContact',
    component: ViewsContact
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNoteFound',
    component: PageNoteFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

