import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { LoadingState } from '../../models';
import { getIsAppLoading } from '../../reducers';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public isAppLoading: Observable<boolean>;

  constructor(private store: Store<LoadingState>) {}

  public ngOnInit(): void {
    this.isAppLoading = this.store.pipe(select(getIsAppLoading));
  }
}
