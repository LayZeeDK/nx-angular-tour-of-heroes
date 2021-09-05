import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  declarations: [ComposeMessageComponent],
  imports: [CommonModule, FormsModule],
})
export class ComposeMessageModule {}
