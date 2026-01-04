import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import DashboardView from '../views/DashboardView.vue'
import InfluencerListView from '../views/InfluencerListView.vue'
import InfluencerDetailView from '../views/InfluencerDetailView.vue'
import CountryComparisonView from '../views/CountryComparisonView.vue'
import BrandConfigView from '../views/BrandConfigView.vue'
import AnalysisHistoryView from '../views/AnalysisHistoryView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/influencers',
    name: 'influencers',
    component: InfluencerListView
  },
  {
    path: '/influencer/:id',
    name: 'influencer-detail',
    component: InfluencerDetailView
  },
  {
    path: '/comparison',
    name: 'country-comparison',
    component: CountryComparisonView
  },
  {
    path: '/config',
    name: 'brand-config',
    component: BrandConfigView
  },
  {
    path: '/history',
    name: 'analysis-history',
    component: AnalysisHistoryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

