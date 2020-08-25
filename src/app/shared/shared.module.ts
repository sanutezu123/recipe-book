import { NgModule } from '@angular/core';
import { CssSpinnerComponent } from './css-spinner/css-spinner.component';
import { ClickOutSideDirective } from './directives/clickOutside.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { PlaceHolderDirective } from './directives/placeholder.directive';
import { ShortenPipe } from '../shared/pipes/shorten.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CssSpinnerComponent,
        ClickOutSideDirective,
        DropdownDirective,
        PlaceHolderDirective,
        ShortenPipe
    ],
    imports: [CommonModule],
    exports: [
        CssSpinnerComponent,
        ClickOutSideDirective,
        DropdownDirective,
        PlaceHolderDirective,
        ShortenPipe,
        CommonModule
    ]
})
export class SharedModule{
}