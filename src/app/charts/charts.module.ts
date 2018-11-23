import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';

@NgModule({
  declarations: [FlotComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,

  ]
})
export class ChartsModule { }
