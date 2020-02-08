// Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Crear array de rutas
const appRoutes: Routes = [
    { path: '', component: LoginComponent }, // Crear componente para pagina de inicio
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '**', component: LoginComponent } // Crear componente para error
];

// Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
