import { AxiosResponse } from "axios";
import api from "../../config/api";

type DomainEntity = {
    id?: string | -1
}

export interface ReadService<T extends DomainEntity> {
    findAll: () => Promise<AxiosResponse<T[]>>
    findById: (id: string) => Promise<AxiosResponse<T>>
}

export interface CRUDService<T extends DomainEntity> extends ReadService<T> {
    create: (entity: T) => Promise<AxiosResponse<T>>
    updateById: (id: string, entity: T) => Promise<AxiosResponse<T>>
    deleteById: (id: string) => Promise<AxiosResponse<void>>
}

export class ReadServiceImpl<T extends DomainEntity> implements ReadService<T> {
    protected path: string

    constructor(path: string) {
        this.path = path
    }

    findAll = () => api.get<T[]>(this.path)

    findById = (id: string) => api.get<T>(`${this.path}/${id}`)
}

export class CRUDServiceImpl<T extends DomainEntity> extends ReadServiceImpl<T> implements CRUDService<T> {

    create = (entity: T) => api.post<T>(this.path, entity)

    updateById = (id: string, entity: T) => api.put<T>(`${this.path}/${id}`, entity)

    deleteById = (id: string) => api.delete<void>(`${this.path}/${id}`)

}