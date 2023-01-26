import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../store/store";

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector