import { getRepository, Repository } from 'typeorm';
import { User } from '@models/User';

class LoginService {
  async auth(name: string, password: string) {
    const userRepository: Repository<User> = getRepository(User);
    const user: User = await userRepository.findOne({ name, password })

    return '';
  }
}

export default new LoginService();