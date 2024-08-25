import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsdashboardComponent } from "./shared/components/postsdashboard/postsdashboard.component";
import { PostformComponent } from "./shared/components/postform/postform.component";
import { PostComponent } from "./shared/components/post/post.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";

const routes : Routes = [
    {
        path: '',
        component: PostsdashboardComponent
    },
    {
        path: 'posts',
        component: PostsdashboardComponent
    },
    {
        path: 'posts/addPosts',
        component: PostformComponent
    },
    {
        path: 'posts/:postsId',
        component: PostComponent
    },
    {
        path: 'posts/:postsId/edit',
        component: PostformComponent
    },
    {
        path: 'page-not-found',
        component: PagenotfoundComponent
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}