export class AddressbookModel{
    id:number=0;
    firstName:String="";
    lastName: String="";
    contactNo:String="";
    email:String="";
    address:String="";
    city:String="";
    state:String="";
    pinCode:String="";

    constructor(
        id:number,
        firstName:String,
        lastName:String,
        contactNo:String,
        email:String,
        address:String,
        city:String,
        state:String,
        pinCode:String
        )
        {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.contactNo=contactNo;
        this.email=email;
        this.address=address;
        this.city=city;
        this.state=state;
        this.pinCode=pinCode;
    }
}