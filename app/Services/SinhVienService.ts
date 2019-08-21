import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SinhVienService{
  constructor(private http:HttpClient){}

  SaveSinhVien(ho, ten){
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }

    let body = new URLSearchParams();
    body.set("ho", ho);
    body.set("ten", ten);

    // Nen thay localhost = IP nhé + Thay header bên Nodejs luôn
    return this.http.post("http://localhost:3000/add", body.toString(), options );

    // https://github.com/khoaphp/AngServices

  }

}
