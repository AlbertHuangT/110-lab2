import { partyAnimation } from "./animation";
export const songs: string[] = ["All of the lights", "Good life", "All of the love"];

export function printSongs(): void {
    partyAnimation("Music");

    console.log("Songs:");
    for (const song of songs) {
        console.log(`- ${song}`);
    }
}
