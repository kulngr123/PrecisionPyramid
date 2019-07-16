import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { EmployeeComponent } from './employee/employee.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: TestComponent },
    { path: 'employee', component: EmployeeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);