import { EquipmentContext } from "../Context/EquipmentContext";
import { useContext } from "react";

export const useEquipmentContext = () => {
    const context = useContext(EquipmentContext);

    if (!context) {
        throw Error('useEquipmentContext must be used inside EquipmentProvider')
    }

    return context
}