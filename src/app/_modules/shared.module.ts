import { LoadingComponent } from './../components/loading/loading.component';
import { ShortNumberPipe } from './../_pipes/short-number.pipe';
import { TagComponent } from './../components/tag/tag.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReplaceWhiteSpacePipe } from '../_pipes/replaceWhiteSpace.pipe';
import { ToastrModule } from 'ngx-toastr';

const MODULES: any[] = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  Ng2SearchPipeModule,
  ReactiveFormsModule,
  ToastrModule.forRoot({
    positionClass: 'toast-bottom-right',
  }),
];

const DECLARATIONS: any[] = [
  TagComponent,
  ShortNumberPipe,
  ReplaceWhiteSpacePipe,
  LoadingComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: MODULES,
  exports: [...DECLARATIONS, ...MODULES],
})
export class SharedModule {}
