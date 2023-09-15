import React from 'react'
import decode from 'jwt-decode'
import {Link,useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
const Navbar = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  var User = useSelector(
    (state)=>(state.currentUserReducer)
  );
  const handleLogout = () =>{
    dispatch({type:'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {
    const token = User?.token;
    if(token){
      const decodedtoken = decode(token);
      if(decodedtoken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])
  
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo' >
          <img src={logo} alt='logo'/>
        </Link>
        <Link to='/' className='nav-item nav-btn'> About </Link>
        <Link to='/' className='nav-item nav-btn'> Products </Link>
        <Link to='/' className='nav-item nav-btn'> For Team </Link>
        <form>
          <input type='text' placeholder='Search' />
          <img src={search} alt='search' width="18" className='search-icon'/>
        </form>
          { User===null ?
          <Link to='/Auth' className='nav-item nav-link'>Login</Link> :
          <>
          <Avatar backgroundColor='#009dff' px='10px' py='5px' color='white' borderRadius='50%'  ><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration :"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
          <button className='nav-item nav-link' style={{margin:'10px'}} onClick={handleLogout}> Log-out </button>
          </>
        }

      </div>
    </nav>
  )
}

export default Navbar