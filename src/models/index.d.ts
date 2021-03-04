import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class Seller {
  readonly id: string;
  readonly name: string;
  readonly siren?: string;
  readonly username: string;
  readonly codePays?: string;
  readonly codeTVA?: string;
  readonly email?: string;
  readonly iban?: string;
  constructor(init: ModelInit<Seller>);
  static copyOf(source: Seller, mutator: (draft: MutableModel<Seller>) => MutableModel<Seller> | void): Seller;
}