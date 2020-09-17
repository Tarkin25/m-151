import Employee from "../../models/Employee";
import {RootState} from "../rootReducer";

type Selector<R> = (state: RootState) => R;

type SelectorWithProps<P extends {}, R> = (props: P) => Selector<R>;

export const selectEmployeeIds: Selector<string[]> = state => state.employees.allIds

export const selectEmployee: SelectorWithProps<{ id: string }, Employee> = props => state => state.employees.byId[props.id];

export const selectSelectedEmployee: Selector<Employee | null> = state => state.employees.selectedId ? state.employees.byId[state.employees.selectedId] : null;