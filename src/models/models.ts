import { FC, ForwardedRef, RefObject } from "react"


export type Elt = HTMLDivElement
export type Ref = RefObject<Elt>
export type FRef = ForwardedRef<Elt>

export interface Page {
    name: string;
    id: string;
    Component: FC;
}