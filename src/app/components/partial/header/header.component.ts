import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}
  list = [
    {
      id:1,
      name:'Indian Spices'
    },
    {
      id:2,
      name:'Indian Herbs'
    },
    {
      id:3,
      name:'Dry Fruits'
    },
    {
      id:4,
      name:'Nuts-Nut Products'
    },
    {
      id:5,
      name:'Fresh Fruits'
    },
    {
      id:6,
      name:'Fresh Vegitables'
    },
    {
      id:7,
      name:'Natural Honey'
    },
    {
      id:8,
      name:'Healthy Millets'
    },
    {
      id:9,
      name:'Handicraft Products'
    }
  ]
  gotoSpices(item:any){
    console.log(item);
    this.router.navigate(['product',item.id])
  }
}
