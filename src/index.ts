console.log("Hello ");

let a:number = 3;
let b:number = 4;

let mySchool: string="Aptech";
//let có thể thay đổi giá trị cho biến

let isAdmin:boolean=false;

//any là bất kỳ kiểu dữ liệu nào
let myVariable: any;

let myArry:number[] = [1,2,3,4];
//Thêm vào phần tử thứ 5
myArry.push(5);

let myArry2:string[] =['toyota','kia'];

let myArry3:(string | number | boolean)[] =['toyota','kia',5,true];

//Tuple ==> Định nghĩa trước kiểu dữ liệu cho mảng, và độ dài của mảng
let myArry4: [number,string,boolean];

myArry4=[1,'hello',true];

//function có return
function sum(a:number,b:number){
    return a+b;
}

function hellType(): void{
    console.log("hello");
}
//có thể truyền hoặc ko thì khai báo kiểu dữ liệu là c?:number (Thêm dấu ? trước :)
function add(a:number,b:number,c?:number){
    return a+b+(c || 0);
}

add(1,2,3);

function helloWord({name, age, email}:{name:string, age:number, email:string}){

}

//Ọbject

interface carType {
    name:string;
    wheels:number;
    color:string;
}
//CarABS kế thừa toàn bộ carType
interface CarABS extends carType{
    abs: boolean;
}

let myCar: carType = {name: 'Toyota', wheels: 4, color: 'green'};

let myCar2: CarABS = {name: 'Toyota', wheels: 4, color: 'green', abs: true};

type UserType = {
    name: string;
    role: 'admin' | 'user' | 'editor';
}

enum RoleType{
    Admin= 'admin',
    Subadmin= 'subadmin',
    User= 'user',
    Editor= 'editor'
}

// let diem:RoleType = {
//     name: 'John',
//     role: RoleType.Editor
// }

let user3: UserType ={
    name: 'John',
    role: 'admin'
}


