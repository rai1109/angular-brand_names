import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';


  Brandlist = [
          {
            name: "facebook",
            dis: " Blue ",
            link: "www.facebook.com",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AONRR_eWDhmtgDOjYW7JA0SDWNzfhPe6Ap0n3-54lyTcQiWg"
          },
          {
            name: "Nike",
            dis : "just do it",
            link: " nike.com",
            logo: "https://cdn2.bigcommerce.com/server1500/ac84d/products/1269/images/2876/Nike_Logo__97043.1340418202.200.200.jpg?c=2"
          },
          


  ]
  removeD(event){  
    for (let item of this.Brandlist)
    {
      if(item.name== event)
      {
        item.name=""
        item.dis=""
        item.link=""
        item.logo=""
      }
    } 

  }



}
