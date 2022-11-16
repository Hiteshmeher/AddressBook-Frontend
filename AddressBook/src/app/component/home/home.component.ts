import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressbookModel } from 'src/app/model/addressbook-model';
import { AddressbookService } from 'src/app/service/addressbook.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addressBook: any;

  addlogo="../../../assets/logo/add-24px.svg";
  deletelogo="../../../assets/logo/delete-black-18dp.svg";
  editlogo="../../../assets/logo/create-black-18dp.svg";


  constructor(
    private service : AddressbookService,
    private router:Router)
   { }

  ngOnInit(): void {
    this.service.getAddressBookData().subscribe((data:any) => {
      this.addressBook=data;
      console.log(this.addressBook);
    });
  }

  onDelete(id:number): void{
      alert("delete successfully");
      this.service.deleteAddressBookdata(id).subscribe((data:any)=>{
      this.addressBook=data.data;
      this.ngOnInit();
    });
  }

  onUpdatee(id:number){
    console.log(id);
    this.router.navigate(['update', id]);
  }

}
