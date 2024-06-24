import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {

  constructor(
    @InjectRepository(Todo)
    private repository: Repository<Todo>,
  ) {}

  create(createTodoInput: CreateTodoInput) {
    return this.repository.save(createTodoInput);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return this.repository.save({...updateTodoInput, id});
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
