import { Component } from '@angular/core';
import { TodoForm } from './components/todo-form/todo-form';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TodoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ultimaTarefa = '';

  showTitle(title: string): void {
    this.ultimaTarefa= title;
    console.log("TESTE: tarefa recebida com sucesso: ", title);
  }
}
