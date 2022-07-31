// import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  ThemeProvider,
  createTheme,
  InputLabel,
  InputAdornment,
  Input,
  TextField,
} from '@mui/material';
// import { registerUser } from '../../api';
import Logo from '../Logo/Logo';
import './SignUp.scss';

export function SignUp() {
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const navigate = useNavigate();

  const handlerForm = async () => {
    // if (password && username && displayName) {
    //   if (password.length < 8) {}
    //   const response = await registerUser(password, username, displayName);

    //   if (!response.ok) {
    //     if (response.status === 409) {
    //       setError('Username is already used by another user');
    //     }

    //     throw new Error(`${response.status} - ${response.statusText}`);
    //   } else {
    //     setPassword('');
    //     setUsername('');
    //     setDisplayName('');
    //     setEmail('');
    //     navigate('/home', { replace: true });
    //   }
    // }
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Montserrat',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            marginBottom: '35px',
          },
        },
      },
    },
  });

  // eslint-disable-next-line no-console
  console.log(theme);

  return (
    <>
      <section className="signup">
        <Logo />
        <p className="signup__title">SIGN UP</p>
        <ThemeProvider theme={theme}>
          <FormControl onSubmit={handlerForm} className="signup__form">

            <FormControl>
              <TextField
                label="Full Name"
                variant="standard"
                color="primary"
                placeholder="Example Name"
                value={username}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <TextField
                label="User Name"
                variant="standard"
                color="primary"
                placeholder="Example123"
                value={displayName}
                onChange={(event) => {
                  setDisplayName(event.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <InputLabel sx={{ left: '-13px' }} htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ padding: '0' }}
                      aria-label="toggle password visibility"
                      onClick={() => {
                        (
                          setIsPasswordVisible(!isPasswordVisible)
                        );
                      }}
                    >
                      {!isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>

            <button type="submit" className="signup__button">
              <span className="signup__buttonname">Sign Up</span>
            </button>
            <p className="signup__undernotice signup__undernotice--up">
              I have an account.
              {' '}
              <NavLink to="/auth/login" className="signup__newaccount">Go to Sign in</NavLink>
            </p>
          </FormControl>
        </ThemeProvider>
      </section>
    </>
  );
}

// eslint-disable-next-line no-lone-blocks
{ /* <label
              htmlFor="password"
              className="sign__labelpassword"
            >
              Password

              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="sign__inputpassword"
                placeholder="***************"
              />
            </label> */ }

// eslint-disable-next-line no-lone-blocks
{ /* <label
              htmlFor="email"
              className="sign__labelemail"
            >
              Email Address

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="sign__inputemail"
                placeholder="example@gmail.com"
              />
            </label> */ }

// eslint-disable-next-line no-lone-blocks
{ /* <label
              htmlFor="email"
              className="sign__labelemail"
            >
              User Name

              <input
                id="username"
                type="text"
                required
                value={displayName}
                onChange={(event) => {
                  setDisplayName(event.target.value);
                }}
                className="sign__inputemail"
                placeholder="Example1488"
              />
            </label> */ }

// eslint-disable-next-line no-lone-blocks
{ /* <label
            htmlFor="fullname"
            className="sign__labelemail"
          >
            Full Name

            <input
              id="fullname"
              type="text"
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              className="sign__inputemail"
              placeholder="Example Name"
            />
          </label> */ }
