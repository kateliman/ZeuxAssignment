import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public outlet: RouterOutlet;
    public ActiveTab = "MyAssets";
 
}