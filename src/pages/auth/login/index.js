// ** React Imports
import { useState } from 'react'
import { signIn, signOut } from "next-auth/react"

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [password_values, setPasswordValues] = useState({ password: '', showPassword: false })
  const [email_values, setEmailValues] = useState({ email: '' })

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handlePassword = prop => event => {
    setPasswordValues({ ...password_values, [prop]: event.target.value })
  }

  const handleEmail = prop => event => {
    setEmailValues({ ...email_values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setPasswordValues({ ...password_values, showPassword: !password_values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handlePasswordReset = event => {
    event.preventDefault()
    router.push(`/auth/reset-password`)
  }

  async function handleOnSubmit(){
    // console.log("values.email: " + email_values.email)
    // console.log("values.password: " + password_values.password)
    const status = await signIn('credentials', {
        redirect: false,
        email: email_values.email,
        password: password_values.password,
        callbackUrl: "/"
    })

    // console.log("status: " + status.status)

    if(status.ok) router.push(status.url)
    
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='/eks/images/eks.png' alt='eks logo' width={50} height={50} />
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            {/* <TextField 
              autoFocus 
              fullWidth 
              id='email' 
              label='Email' 
              sx={{ marginBottom: 4 }} 
            /> */}

            <FormControl fullWidth  sx={{ marginBottom: 4 }} >
              <InputLabel htmlFor='auth-login-email'>Email</InputLabel>
              <OutlinedInput
                label='Email'
                value={email_values.email}
                id='auth-login-email'
                onChange={handleEmail('email')}
                type={password_values.showPassword ? 'text' : 'email'}
              />
            </FormControl>

            <FormControl fullWidth  sx={{ marginBottom: 4 }} >
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={password_values.password}
                id='auth-login-password'
                onChange={handlePassword('password')}
                type={password_values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {password_values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <Link passHref  href='/auth/reset-password'>
                <LinkStyled onClick={handlePasswordReset}>Reset Password</LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              // type='submit'
              onClick={() => handleOnSubmit()}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
