import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacaoService } from '../shared/validacao.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validacao: ValidacaoService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      alert('salvou')
    }
    else {      
      this.validacao.ValidaDados(this.formulario);
    }
  }  

}
