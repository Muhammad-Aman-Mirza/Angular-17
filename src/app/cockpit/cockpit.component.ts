import { Component, ElementRef, OnInit, viewChild, ViewChild,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [
    FormsModule,
    NzButtonModule,
    CommonModule,
    NzFormModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  preserveWhitespaces:true
})
export class CockpitComponent {
  @Output() serverCreated:string | any = new EventEmitter<{ serverName: string | any; serverContent: string | any; }>();
  @Output() blueprintCreated:string | any = new EventEmitter<{ serverName: string | any; serverContent: string | any; }>();
  @ViewChild('serverContentInput', { static: false }) serverContentInput?: ElementRef;

  constructor() { }

  onAddServer(nameInput: HTMLInputElement) {
   
      this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput?.nativeElement.value
      });
  
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput?.nativeElement.value
      });
    }
  

}
