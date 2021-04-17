import { Library } from "./library";

export class Player {
    private static instance: Player;
    private constructor(library: Library) {};
    static getInstance(library: Library): Player {
        if (!Player.instance) {
            Player.instance = new Player(library);
        }
        return Player.instance;
    };
}