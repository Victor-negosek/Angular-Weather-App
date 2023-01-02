import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData; // ? permite inicializar variavel como nao declarado

  ngOnInit(): void {
    this.weatherService.getWeatherData('Berlin').subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response.name);
      },
    });
  }
}
