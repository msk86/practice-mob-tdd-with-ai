import { Cart } from "../cart";

describe("Cart", () => {
    test("should be empty when created", () => {
        const cart = new Cart();
        expect(cart.isEmpty()).toBe(true);
    });
});