import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';


@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  severityLevels: Array<string>;
  attackTypes: Array<string>;
  reportForm: FormGroup;
  captchaKey: string;
  requestPlaceholder: string;

  constructor(public formBuilder: FormBuilder, public reCaptchaV3Service: ReCaptchaV3Service) {
// tslint:disable-next-line: max-line-length
    this.requestPlaceholder = 'GET /example?q="><img src=x\nonerror=alert(document.cookie)>\nHTTP/1.1\nHost: www.exameple.co\nUser-Agent: Mozilla/5.0 Accept: */*';
    this.captchaKey = '6LeOXasUAAAAAKfhhWB85G-w_DWZnoch7T2AYmZc';
    this.reportForm = formBuilder.group({
      title: ['', Validators.required],
      severity: ['', ],
      attackType: [''],
      url: ['', Validators.required],
      description: ['', Validators.required],
      impact: ['', Validators.required],
      request: ['', Validators.required],
      vulnerability: ['', Validators.required],
      payload: ['', Validators.required],
      poc: [''],
      reproSteps: [''],
      counterMeasures: [''],
      captchaToken: ['']
    });
   }

  ngOnInit() {
  }

  submit() {
    this.reCaptchaV3Service.execute(this.captchaKey, 'homepage', (token) => {
      this.reportForm.get('captchaToken').setValue(token);
    });
  }
}
