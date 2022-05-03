import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

describe('CommentController', () => {
  let commentController: CommentController;
  let commentService: CommentService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([Comment]),
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.mysql_host,
          port: 3306,
          username: process.env.mysql_username,
          password: process.env.mysql_password,
          database: process.env.mysql_database,
          entities: [Comment],
          synchronize: true,
          autoLoadEntities: true,
        }),
      ],
      controllers: [CommentController],
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(Comment),
          useValue: {},
        },
      ],
    }).compile();

    commentService = moduleRef.get<CommentService>(CommentService);
    commentController = moduleRef.get<CommentController>(CommentController);
  });

  describe('Controller init', () => {
    it('controller should be initialized', async () => {
      expect(commentController).toBeDefined();
    });
  });
});
