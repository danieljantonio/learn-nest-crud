import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
// import { Employee } from 'src/employees/entities/employee.entity';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
	@Prop()
	FirstName: string;

	@Prop()
	LastName: string;

	@Prop()
	Email: string;

	@Prop()
	Salary: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
