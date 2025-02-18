import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { EmailService } from "../services/email.service";
import { CommonModule } from "@angular/common";
import { showAlert } from '../services/alert.service';
@Component({
    selector: 'footer-component',
    standalone: true,
    imports: [RouterModule,FormsModule,TranslateModule,CommonModule,ReactiveFormsModule ],
    templateUrl: './footer.component.html'

  })

export class FooterComponent{
    title='footer-component';
    emailForm!: FormGroup;
    
    constructor(private emailService: EmailService) {
      
      
    }

    ngOnInit(): void{
      this.emailForm = new FormGroup({
        to: new FormControl('', [Validators.required, Validators.email]),
        name: new FormControl('', Validators.required),
        subject: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required),
      });
    }
    

    onSubmit() {
      if (this.emailForm.valid) {
        this.emailService.sendEmail(this.emailForm.value).subscribe(
          (response) => {
            showAlert('Success', 'Email sent successfully!', 'success');
            this.emailForm.reset();
            console.log('Success:',response)
          },
          (error) => {
            showAlert('Success', 'Email sent successfully!', 'success');
            console.log('Error:',error)
          }
      );
    } 
    }
    
}