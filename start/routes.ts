/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.on('/').render('home');
Route.on('/login').render('log-in');
Route.on('/signup').render('sign-up');

Route.post('/login', 'AuthController.login');
Route.get('/logout', 'AuthController.logout');
Route.post('/signup', 'AuthController.signup');