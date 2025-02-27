import { Item } from './item';

export class Cart {
    private items: Item[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(item: Item): void {
        this.items = this.items.filter(i => i !== item);
    }

    totalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}