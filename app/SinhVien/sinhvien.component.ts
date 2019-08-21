import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SinhVienService } from '../Services/SinhVienService';

@Component({
  template: `
  <form (submit)="XuLy(formSV)" #formSV="ngForm" >
    <input type="text" [(ngModel)]="txtHo" name="txtHo" />
    <input type="text" [(ngModel)]="txtTen" name="txtTen" />
    <input type="submit" value="Gui" />
  </form>
  `,
  selector: "sv",
  providers: [SinhVienService]
})

export class SinhVienComponent{

  constructor(private SinhVienService: SinhVienService){}

  XuLy(f){
    console.log(f);

    this.SinhVienService.SaveSinhVien(f.form.value.txtHo, f.form.value.txtTen)
    .subscribe(data=>{ console.log(data) });

  }
}
