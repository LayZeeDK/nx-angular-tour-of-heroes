import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  imports: [CommonModule],
})
export class MessagesModule {}
