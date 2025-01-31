import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component({
    selector: 'app-weather-forecast',
    imports: [],
    templateUrl: './weather-forecast.component.html',
    styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent {
    public forecasts: WeatherForecast[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getForecasts();
    }

    getForecasts() {
        this.http.get<WeatherForecast[]>('/api/WeatherForecast').subscribe(
            (result) => {
                this.forecasts = result;
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
