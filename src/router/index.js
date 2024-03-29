import { createRouter, createWebHistory } from 'vue-router'
import Stock from "@/views/Stock"
import Entry from "@/views/Entry"
import Checkout from "@/views/Checkout"
import Current from "@/views/Current"
import Home from "@/views/Home"
import UpdateAccount from "@/views/UpdateAccount"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stock',
    name: 'Stock',
    component: Stock
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/Current',
    name: 'Current',
    component: Current
  },
  {
    path: '/updateaccount',
    name: 'UpdateAccount',
    component: UpdateAccount
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const token = localStorage.getItem("token");
const navPathName = location.pathname;

const WHITE_NONTOKEN_PATH_NAMES = "/";

if (!WHITE_NONTOKEN_PATH_NAMES.includes(navPathName) && !token) {
  router.push("/");
};

if (WHITE_NONTOKEN_PATH_NAMES.includes(navPathName) && token) {
  localStorage.removeItem("token");
};

export default router