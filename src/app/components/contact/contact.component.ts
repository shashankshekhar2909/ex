import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  emailSent: boolean = false;

  @ViewChild('contactFormRef', { static: true }) contactFormRef!: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendEmail();
    }
  }

  async sendEmail(): Promise<void> {
    const formData = new FormData();

    formData.append('from_name', this.contactForm.get('name')?.value);
    formData.append('from_email', this.contactForm.get('email')?.value);
    formData.append('company_name', this.contactForm.get('companyName')?.value);
    formData.append('subject', this.contactForm.get('subject')?.value);
    formData.append('message', this.contactForm.get('message')?.value);

    const templateParams = {
      from_name: this.contactForm.get('name')?.value,
      from_email: this.contactForm.get('email')?.value,
      company_name: this.contactForm.get('companyName')?.value,
      subject: this.contactForm.get('subject')?.value,
      message: this.contactForm.get('message')?.value,
    };

    try {
      const response = await emailjs.send('service_eeytdhu', 'template_d148lf8', templateParams, '0a0Gq8xnkjeFuWXhS');
      console.log('Email sent successfully', response.status, response.text);

      // Clear the form and show the alert after successful submission
      this.contactForm.reset();
      this.emailSent = true;

      // Hide the alert after a few seconds
      setTimeout(() => {
        this.emailSent = false;
      }, 5000); // Adjust the timeout as needed
    } catch (error) {
      console.error('Failed to send email', error);
    }
  }
}
