import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([User]),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.mysql_host,
          port: 3306,
          username: process.env.mysql_username,
          password: process.env.mysql_password,
          database: process.env.mysql_database,
          entities: [User],
          synchronize: true,
          autoLoadEntities: true,
        }),
      ],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);
  });

  describe('findAll', () => {
    it('should return array of users', async () => {
      const result = [];
      jest
        .spyOn(userService, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await userController.findAll()).toBe(result);
    });
  });
});
