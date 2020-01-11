import React, { lazy } from 'react';
import { Route, Switch } from "react-router-dom";

const Navbar = lazy(() => import('../components/Navbar'))
const Sidebar = lazy(() => import('../components/Sidebar'))
const Footer = lazy(() => import('../components/Footer'))
const DashboardPage = lazy(() => import('./dashboard/DashboardPage'))
const ListChapters = lazy(() => import('./chapters/List'))
const AddChapter = lazy(() => import('./chapters/AddChapter'))
const ListCourses = lazy(()=> import('./courses/List'))
const AddCourses = lazy(() => import('./courses/AddCourses'))
const ListCities = lazy(() => import('./cities/List'))
const AddCity = lazy(() => import('./cities/AddCity'))
const ListProvince = lazy(() => import('./province/List'))
const AddProvince = lazy(() => import('./province/AddProvince'))
const ListQuiz = lazy(() => import('./quizzes/List'))
const AddQuiz = lazy(() => import('./quizzes/Add'))
const ListClasses = lazy(() => import('./classes/List'))
const FOrmClasses = lazy(() => import('./classes/FormClasses'))

const FormQuiz = lazy(() => import('./quizzes/Form'))

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>

        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/chapter' component={ListChapters} />
        <Route path='/chapter/entry' component={AddChapter} />
        <Route exact path='/course' component={ListCourses} />
        <Route path='/course/entry' component={AddCourses} />
        <Route exact path='/cities' component={ListCities} />
        <Route path='/cities/entry' component={AddCity} />
        <Route exact path='/province' component={ListProvince} />
        <Route path='/province/entry' component={AddProvince} />
        <Route exact path='/quiz' component={ListQuiz} />
        <Route exact path='/classes' component={ListClasses} />
        <Route exact path='/classes/entry' component={FOrmClasses} />
        {/* <Route path='/chapter/:id' component={UpdateChapters} /> */}
        <Route path='/quiz/entry' component={FormQuiz} />
        <Route path='/quiz/:id' component={FormQuiz} />
        <Footer />
      </Switch>

    </>
  )
}
