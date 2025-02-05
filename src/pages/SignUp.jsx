import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import  {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibiltyIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormadata] = useState({
    name: '',
    email : '',
    password : '',
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormadata((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

    return (
      <>
          <div className="pageContainer">
            <header>
              <p className="pageHeader">Welcome Back !</p>
            </header>

            <main>
              <form>
              <input  
                type="text"
                className="nameInput"
                placeholder="Name"
                id="name"
                value={email}
                onChange={onChange}
                />
                <input  
                type="email"
                className="emailInput"
                placeholder="Email"
                id="email"
                value={email}
                onChange={onChange}
                />

                <div className="passwordInputDiv">
                  <input 
                  type={showPassword ? 'text' : 'password'}
                  className="passwordInput"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  />

                  <img
                  src={visibiltyIcon}
                  alt="show password"
                  className="showPassword"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>

                <Link
                to='/forgot-password'
                className="forgotPasswordLink">
                  Forgot Password
                </Link>

                <div className="signUpBar">
                <p className="signUpText">
                  Sign In  
                </p>
                <button className="signUpButton">
                  <ArrowRightIcon fill="#ffffff" width='34px' height='34px' />
                </button>  
                </div>  
              </form>

              {/* Google OAuth */}

              <Link to='/sign-in' className="registerLink">
                Sign Up Instead
              </Link>
            </main>
          </div>
      </>
    )
  }
  
  export default SignUp
  