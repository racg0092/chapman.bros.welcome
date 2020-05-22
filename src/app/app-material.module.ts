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
    MatCheckboxModule
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
        MatCheckboxModule
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
        MatCheckboxModule
    ],
})
export class AppMaterialModule {}