import { NavLink, useNavigate } from 'react-router-dom';
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
import { registerUser } from '../../api';
import Logo from '../Logo/Logo';
import './SignUp.scss';

export function SignUp() {
  const [password, setPassword] = useState('');
  const [isPasswordRight, setIsPasswordRight] = useState('');
  const [userName, setUserName] = useState('');
  const [isUsernameRight, setIsUsernameRight] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isDisplayNameRight, setIsDisplayNameRight] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUserNameExist, setIsUserNameExist] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const regUser = async () => {
    const response = await registerUser(password, userName, displayName);

    if (!response.ok) {
      if (response.status === 409) {
        setIsUserNameExist(true);
      } else {
        setError(`${response.statusText}`);
      }
    } else {
      setIsUserNameExist(false);
      setPassword('');
      setUserName('');
      setDisplayName('');
      navigate('/home', { replace: true });
    }
  };

  const handlerForm = () => {
    if (userName.length === 0) {
      setIsDisplayNameRight('You should fill field User Name');
    } else {
      setIsDisplayNameRight('');
    }

    if (displayName.length === 0) {
      setIsDisplayNameRight('You should fill field Display Name');
    } else {
      setIsDisplayNameRight('');
    }

    if (!(/.{8,}/g).test(password)) {
      setIsPasswordRight('Password should contain not less 8 characters');
    } else {
      setIsPasswordRight('');
    }

    if (!(/[a-zA-Z\s]/g).test(userName)) {
      setIsUsernameRight('Username should contain only letters');
    } else {
      setIsUsernameRight('');
    }

    regUser();
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff',
      },
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  return (
    <>
      <section className="signup">
        <Logo />
        <p className="signup__title">SIGN UP</p>
        {error && <p className="signup__errorfromserver">{error}</p>}
        <ThemeProvider theme={theme}>
          <FormControl
            className="signup__form"
          >
            <TextField
              sx={{ marginBottom: '20px' }}
              label={isUserNameExist ? 'Username is already exist' : 'User Name'}
              variant="standard"
              color="primary"
              placeholder="Example Name"
              value={userName}
              helperText={isUsernameRight.length === 0 ? '' : `${isUsernameRight}`}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />

            <TextField
              sx={{ marginBottom: '20px' }}
              label="Display Name"
              variant="standard"
              color="primary"
              placeholder="Example123"
              value={displayName}
              helperText={isDisplayNameRight.length === 0 ? '' : `${isDisplayNameRight}`}
              onChange={(event) => {
                setDisplayName(event.target.value);
              }}
            />

            <FormControl>
              <InputLabel sx={{ left: '-13px' }} htmlFor="standard-adornment-password">
                Password
              </InputLabel>
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
              {isPasswordRight.length !== 0 && <p className="signup__errorpassword">{isPasswordRight}</p>}
              <button
                type="button"
                className="signup__button"
                onClick={() => {
                  handlerForm();
                }}
              >
                <span className="signup__buttonname">Sign Up</span>
              </button>
            </FormControl>

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
