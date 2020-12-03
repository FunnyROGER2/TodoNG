import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TodosService } from '../shared/todos.service';
// import { TodosFilterPipe } from '../shared/todos-fliter.pipe';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  loading: boolean = true;
  searchString = '';

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .pipe(delay(200))
    .subscribe(() => {
        this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

}
