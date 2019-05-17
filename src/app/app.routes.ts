import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { TestProjectComponent } from './page/test-project/test-project.component';

export const routes: Routes = [
{
  path: '',
	component: LoginComponent,
	resolve: {
	      data: CategoriesResolver
			}
},
{
	path: 'questions/about/:categorySlug',
	component: TestProjectComponent,
	resolve: {
	      data: CategoryQuestionsResolver
	  	}
	},
];
