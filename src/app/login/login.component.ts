import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciais } from '../models/credenciais';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credencial: Credenciais = {
    email :'',
    senha : '',
};

constructor(private router:Router){}

email = new FormControl(null,Validators.email);
senha = new FormControl(null,Validators.minLength(4));

validaDados():boolean{
  if(this.email.valid && this.senha.valid){
    return true;
  }else{
    return false
  }
}

logar(){
 if (this.credencial.email == 'leandro@arraes.com'){
  localStorage.setItem('logado','true')
  this.router.navigate([''])
 }
}


}
