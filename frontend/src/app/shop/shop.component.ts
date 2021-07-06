import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IGemModel } from '../Models/GemModel';
import { IKaratModel } from '../Models/KaratModel';
import { ShopModel } from '../Models/ShopModel';
import { ITypeModel } from '../Models/TypeModel';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  gems: IGemModel[] = [];
  types: ITypeModel[] = [];
  karats: IKaratModel[] = [];
  shopModel = new ShopModel;
  counter: number;
  sortList = [
    {name: 'Alfabetic', value: 'name'},
    {name: 'Ascendent dupa pret', value: 'priceAsc'},
    {name: 'Descendent dupa pret', value: 'priceDesc'}
  ];
  searchStringList = ['inel', 'cercei', 'aur'];
  @ViewChild('search', {static: true}) searchTerm: ElementRef;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getServiceGems();
    this.getServiceTypes();
    this.getServiceKarats();
  }

  getServiceGems(){
    this.shopService.getGems(this.shopModel).subscribe(response => {
      this.gems=response.data;
      this.shopModel.pageIndex = response.pageIndex;
      this.shopModel.pageSize = response.pageSize;
      this.counter = response.count;
    },
      error =>{ console.log(error);});
  }
  getServiceTypes(){
    this.shopService.getTypes().subscribe(response => {this.types = [{id:0,name:"Toate"}, ...response]; },
      error => {console.log(error);});
  }
  getServiceKarats(){
    this.shopService.getKarats().subscribe(response => {this.karats = [{id:0,name:"Toate"}, ...response]; },
      error => {console.log(error);});
  }
  setType(typeId: number){
    this.shopModel.typeId = typeId;
    this.getServiceGems();
  }
  setKarat(karatId: number){
    this.shopModel.karatId = karatId;
    this.getServiceGems();
  }
  setSort(sort: string){
    this.shopModel.sortString = sort;
    this.getServiceGems();
  }
  changePage(event: any){
    this.shopModel.pageIndex = event.page;
    this.getServiceGems();
  }
  searchFunc(){
    this.shopModel.searchString = this.searchTerm.nativeElement.value;
    this.getServiceGems();
  }
}
