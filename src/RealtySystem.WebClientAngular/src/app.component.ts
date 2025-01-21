import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {LayoutService} from "./app/layout/service/layout.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private layoutService: LayoutService) {
        this.layoutService.handleLocalStoreTheme();
    }
}
