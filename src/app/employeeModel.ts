export class EmployeeModel {
    firstName: string = "";
    lastName: string = ""
    address: string = "";
    salary: number = 3000;
    profilePic: string = "";
    note: string = "";
    date: Date;
    gender:string = "";
    department:string = ""
    constructor(note: string, date: Date, department: string, firstName: string, lastName: string, profilePic: string, salary: number,gender:string,address:string) {
        this.date = date;
        this.department = department;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
        this.salary = salary;
        this.note=note;
        this.gender=gender;
    }
}