class Prefill{
    constructor(name,email,contact){
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
    name: string;
    email: string;
    contact: string;
}
class Notes{
    constructor(address){
        this.address = address;
    }
    address: string;
}
class Theme{
    constructor(color){
        this.color = color;
    }
    color: string;
}
export class RazorpayPayment{
    constructor(name,email,contact,address,color){
        this.prefill = new Prefill(name,email,contact);
        this.notes = new Notes(address);
        this.theme = new Theme(color);
    }
    key:string="rzp_test_JINkiaJWgTUGBv"; // Enter the Key ID generated from the Dashboard
    amount: string; // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: string;
    name: string;
    description: string;
    image: string;
    order_id: string; //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: Function;
    prefill: Prefill;
    notes: Notes;
    theme: Theme;
}