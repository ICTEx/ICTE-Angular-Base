import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExampleComponent } from './components/example/example.component';




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    }
    /*
    {
        path: 'dd',
        component: DesktopLayoutComponent,
        children: [
                {
                    path: '',
                    component: DesktopTableChangeQuantityComponent
                },
                {
                    path: 'change-qty',
                    component: DesktopTableChangeQuantityComponent
                },
                {
                    path: 'select-benchmark',
                    component: DesktopTableSelectBenchmarkComponent
                },
                {
                    path : 'log',
                    component: DesktopLogComponent
                }
            ],
        },*/
];

@NgModule({
    declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
