import {StorageType} from "./StorageType.ts";

export type Cart = {
    name: string;
    id: number;
    numberOfSpaces: number;
    maxCarryAmount: number;
    timeTillArrival: number;
    isMoving: boolean;
    carried_items: StorageType[];
}