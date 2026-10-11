import { partyAnimation } from "./animation";
export const snacks: string[] = ["chips", "cookies", "granola", "pretzels", "popcorn", "candy"];

export function printSnacks(): void {
    partyAnimation("Snacks");

    console.log("Snacks:");
    for (const snack of snacks) {
        console.log(`- ${snack}`);
    }
}
