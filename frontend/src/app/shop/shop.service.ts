import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPaginationModel } from '../Models/PaginationModel';
import { ITypeModel } from '../Models/TypeModel';
import { IKaratModel } from '../Models/KaratModel';
import { map } from 'rxjs/operators';
import { ShopModel } from '../Models/ShopModel';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getGems(shopModel: ShopModel)
  {
    let params = new HttpParams;
    if(shopModel.typeId !== 0){
      params = params.append('typeId',shopModel.typeId); //l-am lasat number. trebuie string?
    }
    if(shopModel.karatId !== 0){
      params = params.append('karatId', shopModel.karatId);
    }
    if(shopModel.searchString){
      params = params.append('search', shopModel.searchString);
    }
    
    params = params.append('sort',shopModel.sortString);
    params = params.append('pageIndex', shopModel.pageIndex);
    params = params.append('pageSize', shopModel.pageSize);
    
    return this.http.get<IPaginationModel>(this.url + 'gem', {observe: 'response',params})
      .pipe(map(response => {return response.body;}));
  }
  getTypes()
  {
    return this.http.get<ITypeModel[]>(this.url + 'gem/types');
  }
  getKarats()
  {
    return this.http.get<IKaratModel[]>(this.url + 'gem/karats');
  }

}
