import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true; // Variable para ocultar/mostrar la contraseña
  hideConfirm = true; // Variable para ocultar/mostrar la confirmación de la contraseña
  passwordsDoNotMatch = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  // Método para verificar si las contraseñas coinciden
  onSubmit() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    this.passwordsDoNotMatch = password !== confirmPassword;
    if (this.registerForm.valid && !this.passwordsDoNotMatch) {
      console.log('Formulario válido', this.registerForm.value);
      // Aquí puedes añadir la lógica para el registro
    } else {
      console.log('Formulario inválido');
    }
  }

  // Simulación de inicio de sesión con Google
  onGoogleSignIn() {
    console.log('Iniciando sesión con Google...');
    // Aquí puedes añadir tu lógica de integración con Google OAuth
  }

  // Simulación de inicio de sesión con GitHub
  onGitHubSignIn() {
    console.log('Iniciando sesión con GitHub...');
    // Aquí puedes añadir tu lógica de integración con GitHub OAuth
  }
}
