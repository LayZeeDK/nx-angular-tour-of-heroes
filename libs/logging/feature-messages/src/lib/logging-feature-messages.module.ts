import { NgModule } from '@angular/core';

import { MessagesModule } from './messages/messages.module';

@NgModule({
  exports: [MessagesModule],
})
export class LoggingFeatureMessagesModule {}
