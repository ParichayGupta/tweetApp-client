import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeDashboardComponent,
    PostComponent,
    CreatePostComponent,
    UserComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
