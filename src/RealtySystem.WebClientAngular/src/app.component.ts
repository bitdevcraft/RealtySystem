import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutService } from './app/layout/service/layout.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    constructor(private layoutService: LayoutService) {}

    ngOnInit(): void {
        this.layoutService.handleLocalStoreTheme();
    }

    @HostListener('window:unload', ['$event'])
    unloadHandler() {
        if (this.layoutService._config) {
            localStorage.setItem('theme', JSON.stringify(this.layoutService.layoutConfig()));
            localStorage.setItem('layoutState', JSON.stringify(this.layoutService.layoutState()));
        }
    }
}
