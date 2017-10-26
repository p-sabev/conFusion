import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatGridListModule, MatSelectModule, MatCardModule, MatSlideToggleModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

import { baseURL } from './shared/baseUrl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule, 
    MatButtonModule,
    MatGridListModule,
    MatCardModule, 
    MatCheckboxModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSliderModule,
    AppRoutingModule
    // MatDialog,
    // MatDialogRef
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'baseURL', useValue: baseURL},
    ProcessHttpmsgService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
