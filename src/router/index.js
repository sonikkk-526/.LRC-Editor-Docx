import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeV',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/feature',
    name: 'FeatureView',
    component: () => import('../views/FeaturesView.vue'),
    children: [
      {
        path: 'start',
        name: 'Start',
        component: () => import('../components/Pages/StartPage.vue')
      },
      /* page divider */
      {
        path: 'editor',
        name: 'Editor',
        component: () => import('../components/Pages/Editor/EditorPage.vue')
      },
      {
        path: 'editor/merging-feature',
        name: 'editor-merging',
        component: () => import('../components/Pages/Editor/MergingFeature.vue')
      },
      {
        path: 'editor/merging-option',
        name: 'editor-mergeOptions',
        component: () => import('../components/Pages/Editor/MergingOptions.vue')
      },
      {
        path: 'editor/timestamp-feature',
        name: 'editor-timestamp',
        component: () => import('../components/Pages/Editor/TSEditingFeature.vue')
      },
      {
        path: 'editor/generate-header-feature',
        name: 'editor-autoGen',
        component: () => import('../components/Pages/Editor/AutoGenFeature.vue')
      },
      {
        path: 'editor/empty-header-option',
        name: 'editor-emptyHeader',
        component: () => import('../components/Pages/Editor/EmptyHeaderOption.vue')
      },
      /* page divider */
      {
        path: 'trim',
        name: 'Trim',
        component: () => import('../components/Pages/Trim/TrimFeature.vue')
      },
      {
        path: 'trim/trim-showcase',
        name: 'trimShowcase',
        component: () => import('../components/Pages/Trim/FeatureShowcase.vue')
      },
      {
        path: 'trim/inverse-selection',
        name: 'trimInverse',
        component: () => import('../components/Pages/Trim/InverseOption.vue')
      },
      {
        path: 'trim/trimOptions',
        name: 'trimOptions',
        component: () => import('../components/Pages/Trim/TrimOption.vue')
      },
      /* page divider */
      {
        path: 'create-lrc',
        name: 'createLRC',
        component: () => import('../components/Pages/LRC/CreateLRCPage.vue')
      }
    ]
  },
  {
    path: '/faq',
    name: 'FAQView',
    component: () => import('@/views/FAQView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;