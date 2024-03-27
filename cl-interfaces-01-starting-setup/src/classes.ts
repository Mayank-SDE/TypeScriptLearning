// Code goes here!

abstract class Department {
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {
    //   this.name = name;
    //   this.id = id;
  }

  //   describe(this: Department) {
  //     console.log(` ${this.id} : ${this.name}`);
  //   }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    console.log(this.id);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {}
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment('d1', ['Mayank']);
    return this.instance;
  }

  private lastReport: string;
  describe() {}
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in the valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'IT');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printAccountingDepartment() {
    console.log(this.reports);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

// const accountingDepartment = new AccountingDepartment('d3', []);

const accountingDepartment1 = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment1 === accountingDepartment2);

// accountingDepartment.mostRecentReport = 'Mayank';

// console.log(accountingDepartment.mostRecentReport);

// const employee1 = AccountingDepartment.createEmployee('mayur');

// console.log(employee1);

/*
accountingDepartment.addReport('Nice Work');
console.log(accountingDepartment.mostRecentReport);

accountingDepartment.printAccountingDepartment();

accountingDepartment.addEmployee('Krati');

accountingDepartment.printEmployeeInformation();

// const accounting = new Department('Accounting');

// const accounting = new Department('OneId','Accounting');
/*
const accounting = new ITDepartment('OneId', ['MAX']);

accounting.addEmployee('Software Engineer');
accounting.addEmployee('IAS Officer');

accounting.printEmployeeInformation();

accounting.addEmployee('Anna');
accounting.printEmployeeInformation();

console.log(accounting);
*/
