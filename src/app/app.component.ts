import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  users: any;

  constructor(
    db: AngularFireDatabase,
    ) {
    // db.list('/user').valueChanges().subscribe(
    //   data => {
    //     this.users = data;
    //     console.log(this.users[0]);
    //   })
    
  }

  ngOnInit(): void {
  
 }
}
