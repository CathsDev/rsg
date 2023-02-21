import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTraitComponent } from './pages/single-trait/single-trait.component';
import { AllTraitsComponent } from './pages/all-traits/all-traits.component';
import { ToddlerTraitsComponent } from './pages/toddler-traits/toddler-traits.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'single-trait',
        component: SingleTraitComponent
    },
    {
        path: 'all-traits',
        component: AllTraitsComponent
    },
    {
        path: 'toddler-traits',
        component: ToddlerTraitsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
