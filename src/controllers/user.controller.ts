import { UserService } from "../services/user.service";
import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";

/**
 * Class for the user controller
 * @author minimac911
 */
export class UserController {
  // User service
  private userSerivce: UserService = new UserService();

  /**
   * Controller to get all the current users
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  public async getAllUsers(req: Request, res: Response, next: NextFunction) {
    await this.userSerivce
      .getAllUsers()
      .then((users: User[]) => {
        res.status(200).json({ data: users });
      })
      .catch(next);
  }
}
