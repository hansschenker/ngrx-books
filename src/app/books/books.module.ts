import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListFilterComponent } from './components/book-list-filter/book-list-filter.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookItemComponent } from './components/book-item/book-item.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookListFilterComponent,
    BookAddComponent,
    BookFormComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
