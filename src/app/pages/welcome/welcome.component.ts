import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginComponent } from '../../login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[FormsModule,NzButtonModule,CommonModule,NzFormModule,LoginComponent,RouterOutlet],
  preserveWhitespaces:true
})
export class WelcomeComponent implements OnInit {
  // server:any[]=[]
  // newServerName?: string;
  // newServerContent?: string;

  // onAddServer(){
  //   this.server.push({
  //     type:"server",
  //     name:newServerName.value,
  //     content:this.newServerContent
  //   })
  // }
  // onAddBluePrint(){
  //   this.server.push({
  //     type:"bluePrint",
  //     name:this.newServerName,
  //     content:this.newServerContent
  //   })
  // }
  // onAddServer(name:string,content:string){
  //   this.server.push({
  //     type:"server",
  //     name:name,
  //     content:content
  //   })
  // }
  // onAddBluePrint(name:string,content:string){
  //   this.server.push({
  //     type:"bluePrint",
  //     name:name,
  //     content:content
  //   })
  // }

  @ViewChild('newServerName', { static: false }) newServerNameInput!: ElementRef;
  @ViewChild('newServerContent', { static: false }) newServerContentInput!: ElementRef;

  server: { type: string, name: string, content: string }[] = [];



  onAddServer(serverArray: { type: string, name: string, content: string }[]) {
    const name = this.newServerNameInput.nativeElement.value;
    const content = this.newServerContentInput.nativeElement.value;
    serverArray.push({
      type: "server",
      name: name,
      content: content
    });
    console.log("this.server==",this.server)
    console.log("Added server:", name, content);
    // Additional server logic can be added here
  }

  constructor() { }

  ngOnInit() { }

}
