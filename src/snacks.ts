export const snacks: string[] = ["chips", "cookies", "granola"];

export function printSnacks(): void {
    console.log("Snacks:");
    for (const snack of snacks) {
        console.log(`- ${snack}`);
    }
}

printSnacks();
