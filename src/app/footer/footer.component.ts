import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { EmailService } from "../services/email.service";


@Component({
    selector: 'footer-component',
    standalone: true,
    imports: [RouterModule,FormsModule,TranslateModule ],
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
      console.log(this.emailData);
    }

    onSubmit() {
      this.emailService.sendEmail(this.emailData).subscribe(
        (response) => {
          alert('Email sent successfully!');
          console.log('Success:',response)
        },
        (error) => {
          alert('Error sending email. Please try again later.');
          console.log('Error:',error)
        }
      );
    }
}