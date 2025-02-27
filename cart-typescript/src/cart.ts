import { Item } from './item';

export class Cart {
    private items: Item[] = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    addItem(item: Item): void {
        this.items.push(item);
    }
}