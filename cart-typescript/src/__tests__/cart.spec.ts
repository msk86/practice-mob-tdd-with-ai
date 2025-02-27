import { Cart } from "../cart";
import { Item } from "../item";

describe("Cart", () => {
    test("should be empty when created", () => {
        const cart = new Cart();
        expect(cart.isEmpty()).toBe(true);
    });

    // add 1 item to cart and the cart should not be empty
    test("should not be empty when an item is added", () => {
        const cart = new Cart();
        // mock item with the interface
        const item: Item = { name: "item 1", price: 100 };
        cart.addItem(item);
        expect(cart.isEmpty()).toBe(false);
    });
});