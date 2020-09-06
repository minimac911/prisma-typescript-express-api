import { PrismaClient, User } from "@prisma/client";

/**
 * Class for the user service
 * @author minimac911
 */
export class UserService {
  // Prisma Client
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * getAllUsers will get all the users from the database
   * @returns a promise for an array of users
   */
  public async getAllUsers(): Promise<User[]> {
    let users: Promise<User[]> = this.prisma.user.findMany();
    return users;
  }

  /**
   * getUserByUsername will get a user from the database using their username
   * @param un the username to search with
   * @returns a promise for a user
   */
  public getUserByUsername(un: string): Promise<User | null> {
    let user = this.prisma.user.findOne({
      where: {
        username: un,
      },
    });
    return user;
  }
}
