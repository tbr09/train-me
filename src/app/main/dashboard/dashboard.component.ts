import { DashboardActionTypes } from './store/dashboard.action';
import { BasicUserProfileModel } from './models/userprofile.model';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashboardState, getProfile } from './store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private userProfileSubscription: Subscription;

  user$: Observable<BasicUserProfileModel>;

  constructor(private dashboardStore: Store<DashboardState>) {
    this.user$ = this.dashboardStore.select(getProfile);
  }

  textChanged(value): void {
    console.log(value);
  }

  ngOnInit(): void {
    this.dashboardStore.dispatch({ type: DashboardActionTypes.LoadUser });
    // this.userProfileSubscription = this.user$.subscribe(() => {
    //   // things to do after user load
    // });
  }
}
