import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[FormsModule,NzButtonModule,CommonModule,NzFormModule],
  preserveWhitespaces:true
})
export class WelcomeComponent implements OnInit {
  server:any[]=[]
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
  onAddServer(name:string,content:string){
    this.server.push({
      type:"server",
      name:name,
      content:content
    })
  }
  onAddBluePrint(name:string,content:string){
    this.server.push({
      type:"bluePrint",
      name:name,
      content:content
    })
  }

  constructor() { }

  ngOnInit() { }

}
