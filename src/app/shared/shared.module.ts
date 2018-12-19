import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ImageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ImageLoaderComponent]
})
export class SharedModule { }
