import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarRef,
} from "@angular/material/snack-bar";

@Injectable()
export class NotificationService {
  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  snackBarAutoHide = "1500";

  constructor(private snackBar: MatSnackBar) {}

  sendNotification(message) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarConfig.panelClass = "glam-snackbar";
    this.snackBarRef = this.snackBar.open(message, "", this.snackBarConfig);
  }
}
