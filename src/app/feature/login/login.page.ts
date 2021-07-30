import { Component, OnInit } from '@angular/core';
import { NavitaireService } from '../../core/services/navitaire.service';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  constructor(private navitaireService: NavitaireService, private router: Router) {}

  ngOnInit() {
    this.buildForm();
  }

  login(): void {
    this.router.navigateByUrl('/main-record-locator');
  }

  private buildForm(): void {
    this.formLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      domain: new FormControl('', Validators.required),
    });
  }
}
