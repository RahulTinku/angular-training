import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hello-app';
  message = '';
  subscripton: Subscription = new Subscription();
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.subscripton = this.messageService.message.subscribe(
      (msg) => (this.message = msg)
    );
  }

  ngOnDestroy() {
    this.subscripton.unsubscribe();
  }
}
