import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisclaimerModalComponent } from './components/disclaimer-modal/disclaimer-modal.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DisclaimerModalComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DisclaimerModalComponent,
  ],
})
export class SharedModule { }
