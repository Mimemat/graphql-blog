import { hash, compare } from 'bcryptjs';

import { IHashProvider } from '../models/IHashProvider';

export class BcryptHashProvider implements IHashProvider {
  async generate(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
