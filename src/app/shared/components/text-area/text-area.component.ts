import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  value: string;
  charCounter: number = 0;

  @Input() initialValue: string;
  @Input() charLimit: number;

  @Output() textChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.value = this.initialValue;
    this.charCounter = this.initialValue.length;
  }

  textAreaChanged(value): void {
    if (value.length <= this.charLimit) {
      this.value = value;
      this.charCounter = value.length;
      this.textChanged.emit(value);
    } else {
      // log validation message - red or smth
    }
  }
}
