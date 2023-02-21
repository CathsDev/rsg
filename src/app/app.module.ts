import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SingleTraitComponent } from './pages/single-trait/single-trait.component';
import { AllTraitsComponent } from './pages/all-traits/all-traits.component';
import { ToddlerTraitsComponent } from './pages/toddler-traits/toddler-traits.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent,
        MenuComponent,
        SingleTraitComponent,
        AllTraitsComponent,
        ToddlerTraitsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
