import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LegalSupportComponent } from './legal-support/legal-support.component';
import { ResourcesComponent } from './resources/resources.component';
import { TherapyComponent } from './therapy/therapy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    {path: 'legal', component: LegalSupportComponent},
    {path:'resource', component: ResourcesComponent},
    {path: 'therapy', component: TherapyComponent}
   // { path: '**', redirectTo: '' }
];
