import bgImage from '../../../assets/bg.jpg'
import mailIcon from '../../../assets/mail.png'
import lockIcon from '../../../assets/lock.png'

import './style.css'

export function Home() {
	return (
		<div className='home'>
			<img src={bgImage} alt='' className='bgImage' />
			<div className='login card'>
				<div className='container'>
					<h1 id='homeTitle'>ORANGE</h1>
					<form>
						<div className='input-email input-icon'>
							<label htmlFor='email' className='labelInput'>
								Email
							</label>
							<input
								type='text'
								name='email'
								className='inputs'
								placeholder='seunome@email.com'
							/>
							<img src={mailIcon} className='icon' />
						</div>
						<div className='input-password input-icon'>
							<label htmlFor='password' className='labelInput'>
								Password
							</label>
							<input
								type='password'
								name='password'
								className='inputs'
								placeholder='Password'
							/>
							<img src={lockIcon} alt='' className='icon' />
							<div className='showPass'>
								<input type='checkbox' name='show-pass' id='show-pass' />
								<label id='showPass' htmlFor='show-pass'>
									Mostrar a senha.
								</label>
							</div>
						</div>
						<p id='trouble'>Problemas para acessar sua conta?</p>
						<button type='submit' id='loginBtn'>
							Acessar
						</button>
						<p className='orLines'> ou </p>
						<button id='singinBtn'>Cadastrar</button>
					</form>
					<p id='terms'>Termos de uso • Política de privacidade</p>
				</div>
			</div>
		</div>
	)
}
