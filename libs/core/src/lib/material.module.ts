import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from './material.barrel';



@NgModule({
  declarations: [],
  exports: [
    ...MATERIAL_MODULES
  ]
})
class MaterialModule { }

export default MaterialModule;
