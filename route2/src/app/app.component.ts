import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route2 app';
  sno:number = 1;
  sname:string = 'Uday';
  fullname:string = 'Udaybhanu'

  isDisabled:boolean=false;

  display()
  {
    alert("Good Work...!")
  }

  constructor()
  {
    setTimeout(() =>{
      this.isDisabled=true;
    },5000);
  }
}
