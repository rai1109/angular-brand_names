import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
   selector:'brand',
   templateUrl: './new.html',
   styles:  ['h1 {font-family : latoo}']


})
export class BrandComponet
{
  @Input() brandName :  string;
  @Input() brandlink :  string;
  @Input() discription : string;
  @Input() logo: any;
  


@Output() removeBrandEvent: EventEmitter <string> =  new EventEmitter<string>()



removeBrand()
{
    this.removeBrandEvent.emit(this.brandName)
    
}
}