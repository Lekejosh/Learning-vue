import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/jobs/Job.vue";
import JobsDetails from "../views/jobs/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id", 
    name: "JobDetails",
    component: JobsDetails,
    props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "jobs",
  },
  //404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
