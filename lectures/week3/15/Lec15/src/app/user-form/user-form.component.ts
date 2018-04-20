import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { User } from './user';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-user-form',
  template: `
    <div>
      <form novalidate #f="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" name="name" [(ngModel)]="user.name" required 
            [ngClass]="{'err': f.form.controls.name?.invalid && (f.form.controls.name?.dirty || f.form.controls.name?.touched)
                          }"
               />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" name="email" [(ngModel)]="user.email" 
            #email="ngModel" required
            [ngClass]="{'err': email.invalid && (email.dirty || email.touched)
                          }"/>
        </div>
        <div class="form-group">
          <label>Posts</label>
          <textarea class="form-control" name="posts" [(ngModel)]="user.posts" required minlength="10" 
              #post='ngModel' [ngClass]="{'err':post.invalid && (post.dirty || post.touched)}"></textarea>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit" [disabled]="f.invalid">Submit</button>
          <button class="btn btn-primary" (click)="onRetrieve()">Get Data</button>
        </div>
        <!--{{f.value | json}}-->
      </form>
    </div>
  `,
  styles: [`form > .form-group { width: 300px; }
            .err {border-color: red !important;}
            `],
  providers: [HttpServiceService]
})
export class UserFormComponent implements OnInit {

  user:User = new User();
  @ViewChild('f') form: any;

  constructor(public service:HttpServiceService) { }

  ngOnInit() {
  }

  onRetrieve() {
    this.service.getUser(1).subscribe(
      res => {
        console.log(res);
        this.user.name = res.username;
        this.user.email = res.email;
        
        this.service.getPostsByUser(1).subscribe(
          res=> {
              for(let post of res) {
                this.user.posts += post.body;
              }
          }, err=>{console.log(err)}
        );
      }, 
      err=>{console.log(err);});
  }

  onSubmit() {
    console.log(this.user);
    this.form.reset();
  }

}
