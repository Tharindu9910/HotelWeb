import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Dinning"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Components/Blog/Accommodation"
import BlogSingle from "./Components/Blog/blog-single-page/Information"
// import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import Signup from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <AuthProvider>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/dinning' exact component={Destinations} />
          {/*<Route path='/singlepage/:id' component={SinglePage} /> */}
          <Route path='/accommodation' exact component={Blog} />
          <Route path='/information/:id' component={BlogSingle} />
          {/* <Route path='/testimonial' component={Testimonial} /> */}
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
    </AuthProvider>
  )
}

export default App
