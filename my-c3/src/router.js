// router.js
import { createRouter, createWebHistory } from 'vue-router';
import TemplateSyntax from './components/TemplateSyntax.vue';
import MethodsAndReactivity from './components/MethodsAndReactivity.vue';
import ClassAndStyleBindings from './components/ClassAndStyleBindings.vue';
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import FormInputBindings from './components/FormInputBindings.vue';
import WatchersCheck from './components/WatchersCheck.vue';
import ComponentPropsEventsSlots from './components/ComponentPropsEventsSlots.vue';

const routes = [
  {
    path: '/template-syntax',
    component: TemplateSyntax
  },
  {
    path: '/methods-reactivity',
    component: MethodsAndReactivity
  },
  {
    path: '/class-style-bindings',
    component: ClassAndStyleBindings
  },
  {
    path: '/list-rendering',
    component: ListRendering
  },
  {
    path: '/event-handling',
    component: EventHandling
  },
  {
    path: '/form-input-bindings',
    component: FormInputBindings
  },
  {
    path: '/watchers',
    component: WatchersCheck
  },
  {
    path: '/component-props-events-slots',
    component: ComponentPropsEventsSlots
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
