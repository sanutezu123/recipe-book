import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'landing-page',
    styleUrls: ['./landing-page.componenet.css'],
    templateUrl: './landing-page.componenet.html'
})
export class LandingPage implements OnInit {
    // tslint:disable-next-line:max-line-length
    coverImage = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    siteName = 'Food Stories';
    content = 'A place to share your recipes to the world';

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    ngOnInit() {
    }
}
