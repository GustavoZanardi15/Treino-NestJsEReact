import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  nome: string;

  @Prop()
  idade: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
