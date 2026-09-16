import { FormsModule } from '@angular/core';

@Component({
  imports: [FormsModule],
  standalone:true,
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoListComponent {}
