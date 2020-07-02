import { NotificationService } from '../../../services/notification.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';

import {
  ClientActionTypes,
  LoadClientsSuccess,
  LoadClientsFail,
} from './clients.action';

@Injectable()
export class ClientsEffects {
  constructor() {}
}
