import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-main-record-locator',
  templateUrl: './main-record-locator.page.html',
  styleUrls: ['./main-record-locator.page.scss'],
})
export class MainRecordLocatorPage implements OnInit {
  recordLocatorForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  getRecordLocator(): void {

  }

  private buildForm(): void {
    this.recordLocatorForm = new FormGroup({
      recordLocator: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

}
