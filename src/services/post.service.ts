import { PrismaClient, Post } from "@prisma/client";

/**
 * Class for the Post service
 * @author minimac911
 */
export class PostSerivce {
  // Prisma Client
  private prisma: PrismaClient = new PrismaClient();

  public async getPostsByUser(un: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        user: {
          username: un,
        },
      },
    });
  }
}
