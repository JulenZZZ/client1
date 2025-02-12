import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { EmailService } from "../services/email.service";
import { CommonModule } from "@angular/common";


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
          alert('Email sent successfully!');
          console.log('Success:',response)
        },
        (error) => {
          alert('Email sent successfully!');
          console.log('Error:',error)
        }
      );
    }
}