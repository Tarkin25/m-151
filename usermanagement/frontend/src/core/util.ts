import DomainEntity from "./models/DomainEntity";

export type StringMap<V> = {
    [key: string]: V
}

export const normalizeArray = <T extends DomainEntity>(array: T[]) => {
    let byId: StringMap<T> = {};

    array.forEach(value => {
        byId[value.id] = value;
    })

    return {
        byId,
        allIds: array.map(value => value.id)
    }
}