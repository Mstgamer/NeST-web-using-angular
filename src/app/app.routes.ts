import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { IndustriesComponent } from './page/industries/industries.component';
import { ContactComponent } from './page/contact/contact.component';
import { ErrorComponent } from './page/error/error.component';

export const routes: Routes = [

{path: '',  component: HomeComponent},
{
    path: 'about',  component: AboutComponent},
  {  path: 'industries',  component: IndustriesComponent},
  {  path: 'Contact',  component: ContactComponent},
  { path: '**',component: ErrorComponent}



];
