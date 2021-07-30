import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-record-locator',
  templateUrl: './main-record-locator.page.html',
  styleUrls: ['./main-record-locator.page.scss'],
})
export class MainRecordLocatorPage implements OnInit {
  recordLocatorForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  getRecordLocator(): void {
    const record = this.recordLocatorForm.get('recordLocator')?.value;
    this.router.navigate(['/reservation-menu', record]);
  }

  private buildForm(): void {
    this.recordLocatorForm = new FormGroup({
      recordLocator: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

}
