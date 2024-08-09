import { Routes } from '@angular/router';
import { LandpageComponent } from './landpage/landpage.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [

    { path: '', component: LandpageComponent },
    { path: 'recipes', component: HomeComponent },
    { path: 'result', component: ResultComponent },
    

];
