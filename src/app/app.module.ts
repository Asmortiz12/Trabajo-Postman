import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
