import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { PostService } from './post.service';

describe('PostController', () => {
  let postController: PostController;
  let postService: PostService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Post]),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.mysql_host,
          port: 3306,
          username: process.env.mysql_username,
          password: process.env.mysql_password,
          database: process.env.mysql_database,
          entities: [Post],
          synchronize: true,
          autoLoadEntities: true,
        }),
      ],
      controllers: [PostController],
      providers: [
        PostService,
        {
          provide: getRepositoryToken(Post),
          useValue: {},
        },
      ],
    }).compile();

    postService = moduleRef.get<PostService>(PostService);
    postController = moduleRef.get<PostController>(PostController);
  });

  describe('Controller init', () => {
    it('controller should be initialized', async () => {
      expect(postController).toBeDefined();
    });
  });
});
