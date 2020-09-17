import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, addToReadingList } from '@tmo/books/data-access';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private _snackBar:MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    const snackbarRef: MatSnackBarRef<SimpleSnackBar> =
    this._snackBar.open(`You removed ${item.title} from your reading list.`, 'Undo');
    const self: ReadingListComponent = this;
    snackbarRef.onAction().subscribe(() => {
      self.store.dispatch(addToReadingList({ book: { id: item.bookId, ...item } }));
    });
  }
}
