import { get, set } from "idb-keyval";
export const loadState = async () => (await get("state")) ?? null;
export const saveState = async (s) => set("state", s);
