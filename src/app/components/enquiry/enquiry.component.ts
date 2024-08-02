import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  list = [
    { id: 1, name: 'Indian Spices' },
    { id: 2, name: 'Indian Herbs' },
    { id: 3, name: 'Dry Fruits' },
    { id: 4, name: 'Nuts-Nut Products' },
    { id: 5, name: 'Fresh Fruits' },
    { id: 6, name: 'Fresh Vegetables' },
    { id: 7, name: 'Natural Honey' },
    { id: 8, name: 'Healthy Millets' },
    { id: 9, name: 'Handicraft Products' }
  ];

  contactForm: FormGroup;
  files: { [key: string]: File } = {};

  @ViewChild('contactFormRef', { static: true }) contactFormRef!: ElementRef<HTMLFormElement>;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      subject: ['', Validators.required],
      address: ['', Validators.required],
      product: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any, field: string): void {
    if (event.target.files.length > 0) {
      this.files[field] = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendEmail();
    }
  }

  async sendEmail(): Promise<void> {
    const formData = new FormData();

    formData.append('from_name', this.contactForm.get('name')?.value);
    formData.append('from_email', this.contactForm.get('email')?.value);
    formData.append('contact', this.contactForm.get('contact')?.value);
    formData.append('subject', this.contactForm.get('subject')?.value);
    formData.append('address', this.contactForm.get('address')?.value);
    formData.append('product', this.list.find(p => p.id === +this.contactForm.get('product')?.value)?.name || '');
    formData.append('message', this.contactForm.get('message')?.value);

    if (this.files['coverLetter']) {
      formData.append('coverLetter', this.files['coverLetter'], this.files['coverLetter'].name);
    }
    if (this.files['orderDocument']) {
      formData.append('orderDocument', this.files['orderDocument'], this.files['orderDocument'].name);
    }

    const templateParams = {
      from_name: this.contactForm.get('name')?.value,
      from_email: this.contactForm.get('email')?.value,
      contact: this.contactForm.get('contact')?.value,
      subject: this.contactForm.get('subject')?.value,
      address: this.contactForm.get('address')?.value,
      product: this.list.find(p => p.id === +this.contactForm.get('product')?.value)?.name,
      message: this.contactForm.get('message')?.value,
      // Attachments are added to FormData, no need to include in templateParams
    };
// emailjs.sendForm('service_eeytdhu', 'template_c52th8r', formElement, '0a0Gq8xnkjeFuWXhS')

    try {
      const response = await emailjs.send('service_eeytdhu', 'template_c52th8r', templateParams, '0a0Gq8xnkjeFuWXhS');
      console.log('Email sent successfully', response.status, response.text);
      this.contactForm.reset();
      this.files = {};
      this.emailSent = true;

      // Hide the alert after a few seconds
      setTimeout(() => {
        this.emailSent = false;
      }, 5000); // Adjust the timeout as needed
    } catch (error) {
      console.error('Failed to send email', error);
    }
  }
  emailSent = false;
}
