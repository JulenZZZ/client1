import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { EmailService } from "../services/email.service";
import { CommonModule } from "@angular/common";
import { showAlert } from '../services/alert.service';

@Component({
    selector: 'footer-component',
    standalone: true,
    imports: [RouterModule,FormsModule,TranslateModule,CommonModule ],
    templateUrl: './footer.component.html'

  })

export class FooterComponent{
    title='footer-component';

     emailData = {
      to: '',
      name: '',
      subject: '',
      body: '',
    };
    
    constructor(private emailService: EmailService) {
      
    }

    ngOnInit(): void{

    }

    onSubmit() {
      this.emailService.sendEmail(this.emailData).subscribe(
        (response) => {
          showAlert('Success', 'Email sent successfully!', 'success');
          console.log('Success:',response)
        },
        (error) => {
          showAlert('Success', 'Email sent successfully!', 'success');
          console.log('Error:',error)
        }
      );
    }
}