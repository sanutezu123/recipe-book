import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AuthComponent],
    exports: [AuthComponent],
    imports: [SharedModule, ReactiveFormsModule, AppRoutingModule]
})
export class AuthModule {
}