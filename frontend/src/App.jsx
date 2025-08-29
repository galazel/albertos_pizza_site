import {Routes,Route} from 'react-router-dom'
import NavigationBar from '../components/common/NavigationBar'
import Home from '../components/Home'

function App() {
    return (
        <Routes>
            <Route path='/' element = {<NavigationBar/>}/>
            <Route path='/home' element = {<Home/>}/>
        </Routes>
    )
}

export default App
