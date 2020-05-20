import { NgModule } from '@angular/core';

import { 
    MatSliderModule,
    MatButtonModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
 } from '@angular/material';


@NgModule({
    imports: [
        MatSliderModule,
        MatButtonModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatTableModule,
        MatDatepickerModule,
        MatSelectModule,
        MatListModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ],
    exports: [
        MatSliderModule,
        MatButtonModule,
        MatSnackBarModule,
        MatBottomSheetModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatTableModule,
        MatDatepickerModule,
        MatSelectModule,
        MatListModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
    ],
})
export class AppMaterialModule {}