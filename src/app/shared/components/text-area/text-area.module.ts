import { MatFormFieldModule } from '@angular/material/form-field';
import { TextAreaComponent } from './text-area.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TextAreaComponent],
  imports: [CommonModule, MatFormFieldModule],
  exports: [TextAreaComponent],
})
export class TextAreaModule {}
