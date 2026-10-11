import { partyAnimation } from "./animation";
export const snacks: string[] = ["cookies", "granola"];

export function printSnacks(): void {
    partyAnimation("Snacks");

    console.log("Snacks:");
    for (const snack of snacks) {
        console.log(`- ${snack}`);
    }
}
