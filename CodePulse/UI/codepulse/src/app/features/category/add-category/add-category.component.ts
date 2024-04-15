import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { response } from 'express';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  model: AddCategoryRequest;

  constructor(private categoryService: CategoryService){
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit(){
    this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log('Success');
      }
    })
  }
}
