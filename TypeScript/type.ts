
let a:number =5;
let b:string ='b';
let c:boolean =true;
let d:any;
let e:number[] =[1,2,3];
let f:Array<number> =[1,2,3];
let g:any[] = [1,'a',true];
let h:[string,number,boolean]=['a',5,false];//tuple



const krediPayment= 0 ;
const havelePayment=1;
const eftPayment=2;

enum Payment {kredi=0,havale=1,kapidaodeme=2,eft=3};

let kredi =Payment.kredi; // 0
let havele =Payment.havale; // 1
let kapidaodeme =Payment.kapidaodeme; // 1
let eft=Payment.eft; // 3