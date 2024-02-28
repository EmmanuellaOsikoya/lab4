import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';

hide:boolean = true;

  press:number = 0;

  buttonClicked(){
    this.press++;
  }

  clicked2(){
    this.hide = !this.hide;
  }
  
}
