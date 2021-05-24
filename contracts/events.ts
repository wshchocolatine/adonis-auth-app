/**
 * Contract source: https://git.io/JfefG
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

declare module '@ioc:Adonis/Core/Event' {
	interface EventsList {
		'new:user': {
			id: number;
			username: string;
			email: string;
			password: string;
		};
	}
}
