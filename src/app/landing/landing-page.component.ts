import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'landing-page',
    styleUrls: ['./landing-page.component.css'],
    templateUrl: './landing-page.component.html'
})
export class LandingPage implements OnInit {
    // tslint:disable-next-line:max-line-length
    siteName = 'RecipeBook';
    content = 'A place to share your recipes to the world';
    quote = 'A recipe has no Soul. You as, the cook must bring the soul to it';
    quoteAuthor = 'Thomas Keller';
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    ngOnInit() {
    }
}
