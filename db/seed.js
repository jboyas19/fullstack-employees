import client from './client.js';
import { createEmployee } from './queries/employees.js';

export async function seedEmployees() {
  await client.query('DELETE FROM employees');
  const employees = [
    { name: 'Alice Johnson', birthday: '1990-03-15', salary: 75000 },
    { name: 'Bob Martinez', birthday: '1985-07-22', salary: 82000 },
    { name: 'Carol White', birthday: '1992-11-05', salary: 68000 },
    { name: 'David Kim', birthday: '1988-01-30', salary: 91000 },
    { name: 'Eva Nguyen', birthday: '1995-06-18', salary: 72000 },
    { name: 'Frank Patel', birthday: '1983-09-12', salary: 95000 },
    { name: 'Grace Lee', birthday: '1991-04-25', salary: 78000 },
    { name: 'Henry Brown', birthday: '1987-12-08', salary: 88000 },
    { name: 'Isabella Davis', birthday: '1993-08-14', salary: 65000 },
    { name: 'James Wilson', birthday: '1980-02-20', salary: 105000 },
    { name: 'Karen Thomas', birthday: '1994-05-03', salary: 71000 },
    { name: 'Luis Garcia', birthday: '1989-10-17', salary: 84000 },
  ];
  for (const employee of employees) {
    await createEmployee(employee);
  }
  console.log('Seeded employees successfully!');
}
