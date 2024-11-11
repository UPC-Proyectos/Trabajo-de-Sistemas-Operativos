import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  isDarkTheme = false; // Variable para almacenar el estado del tema

  // Función para alternar el tema
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
