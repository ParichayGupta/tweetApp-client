import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { PostComponent } from './components/post/post.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent, children: [
      { path: 'all-post', component: PostComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'users', component: UserComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: '', redirectTo: '/home/all-post', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
