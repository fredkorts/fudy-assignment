import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.scss'],
})
export class ManagerFormComponent {

  form: FormGroup;
  restaurantId: string = ''; 

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = params['restaurantId'];
    });
  }

  navigateHome() {
    this.router.navigate(['/']);
  }  

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})/;
    const valid = passwordRegex.test(control.value);
    return valid ? null : { invalidPassword: { value: control.value } };
  }

  onSubmit() {
    if (this.form.valid) {
      const payload = this.form.value;
  
      // Fake successful response
      console.log('Success!', {
        success: true,
        message: 'Manager added successfully!',
        restaurant: this.restaurantId,
        data: payload
      });
      this.navigateHome();
    }
  }
  
}
