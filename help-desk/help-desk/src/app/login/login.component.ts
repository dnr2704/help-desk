import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidacaoService } from '../shared/validacao.service';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validacao : ValidacaoService

  ) { }
        
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
      senha: [null,[Validators.required, Validators.minLength(3)]]
    })
  }; 

  onSubmit() {
    if (this.formulario.valid) {
      alert('salvou')
    }
    else {      
      this.validacao.ValidaDados(this.formulario);
    }
  }  
}
