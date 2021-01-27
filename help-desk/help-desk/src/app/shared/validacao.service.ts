import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { tap, map } from 'rxjs/Operator';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor( private http: HttpClient) { }

	ValidaDados(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      //controle.markAsPending limpa o campo
      if(controle instanceof FormGroup) /*verifica se o controle é do tipo FormGroup*/
        this.ValidaDados(controle)      
    });
  }
  
  VerificaEmail(email: string) {
    
  }  
}
