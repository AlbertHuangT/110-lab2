import { describe, it, expect } from "vitest";
import { songs } from "./music";

describe("music", () => {
  it("should have at least 1 song", () => {
    expect(songs.length).toBeGreaterThanOrEqual(1);
  });
});
