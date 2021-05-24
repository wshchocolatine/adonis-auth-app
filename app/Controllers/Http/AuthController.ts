import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ConfirmEmail from 'App/Mailers/ConfirmEmail';
import User from 'App/Models/User';
import StoreUserValidator from 'App/Validators/StoreUserValidator';

export default class AuthController {
	public async signup({ auth, request, response }: HttpContextContract): Promise<string | void> {
		const payload = await request.validate(StoreUserValidator);
		const user = await User.create(payload);

		await auth.login(user);
		await new ConfirmEmail(user).send();

		response.redirect('/');
	}

	public async login({
		auth,
		request,
		response,
		view,
	}: HttpContextContract): Promise<string | void> {
		const { email, password } = request.only(['email', 'password']);
		try {
			await auth.attempt(email, password);
		} catch (error) {
			return view.render('log-in', {
				error: 'Identifiant ou mot de passe invalide.',
			});
		}

		response.redirect('/');
	}

	public async logout({ auth, response }: HttpContextContract): Promise<void> {
		await auth.logout();
		response.redirect('/');
	}
}
