import { Component } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'digital-health';

    constructor(private _utilities: UtilitiesService){}

    ngOnInit(): void {
        var years = ['2021'];
        if(localStorage.getItem("governance_id")) {
            localStorage.removeItem('governance_id');
            localStorage.setItem("governance_id", JSON.stringify(1));
        }

        if(localStorage.getItem("year") == null) {
            localStorage.setItem("year", JSON.stringify(2021));
        }

        if(localStorage.getItem("selected_years") == null) {
            localStorage.setItem("selected_years", JSON.stringify('2021'));
        }

        if (localStorage.getItem("country_id") === null) {
            localStorage.setItem("country_id", JSON.stringify("14"));
            localStorage.setItem("country_flag", JSON.stringify("au.png"));
            localStorage.setItem("country_iso_code", JSON.stringify("AU"));
            localStorage.setItem("country_name", JSON.stringify("Australia"));
        }

    }
}
