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

    //delete item from cart and the cart should be empty
    test("should be empty when an item is removed", () => {
        const cart = new Cart();
        const item: Item = { name: "item 1", price: 100 };
        cart.addItem(item);
        cart.removeItem(item);
        expect(cart.isEmpty()).toBe(true);
    }
    );
    //calculate total price of items in the cart
    test("should calculate total price of items in the cart", () => {
        const cart = new Cart();
        const item1: Item = { name: "item 1", price: 100 };
        const item2: Item = { name: "item 2", price: 200 };
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.totalPrice()).toBe(300);
    }
    );
    //calculate total price if cart is empty
    test("should return 0 as total price if cart is empty", () => {
        const cart = new Cart();
        expect(cart.totalPrice()).toBe(0);
    }
    );
});