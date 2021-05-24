import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail';
import User from 'App/Models/User';

export default class ConfirmEmail extends BaseMailer {
	constructor(private user: User) {
		super();
	}

	public prepare(message: MessageContract) {
		message
			.subject('Abolition verification')
			.from('no-reply@abolition.fr')
			.to(this.user.email)
			.htmlView('emails/confirm-email', {
				user: this.user,
			});
	}
}
