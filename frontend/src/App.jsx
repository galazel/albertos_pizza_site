import {Routes,Route} from 'react-router-dom'
import NavigationBar from '../components/common/NavigationBar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import About from '../components/About'
import Offers from '../components/Offers'
import Contact from '../components/Contact'

function App() {
    return (
        <Routes>
            <Route path='/' element = {<NavigationBar/>}/>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/menu' element = {<Menu/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/offers' element = {<Offers/>}/>
            <Route path='/contact' element = {<Contact/>}/>
        </Routes>
    )
}

export default App
