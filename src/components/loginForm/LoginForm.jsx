import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css"

function LoginForm() {
  return (

  <form className="login-form">
    <img src="https://img.freepik.com/premium-photo/halloween-jack-o-lantern-pumpkin-black-background_158023-733.jpg" alt="" />    
    <MyInput name={"login"} type={"text"} placeholder='login' label='Enter your login:'/>
    <MyInput name="email" type="email" placeholder='email' label='Enter your email: '/>
    <MyInput name="password" type="password" placeholder='password' label='Enter your password: '/>

    <MyButton type={'submit'} text='Create account'/>
    
  </form>
  );
}

export default LoginForm;
