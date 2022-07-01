import {useEffect, useState} from 'react';
import showsService from "../services/showsService";

const useEndSlots = () => {
    const [endSlotsLoading, setEndSlotsLoading] = useState(true);
    const [endSlots, setEndSlots] = useState([]);

    useEffect(() => {
        showsService.fetchAllSlots().then(endSlots => {
            setEndSlotsLoading(false);
            setEndSlots(endSlots);
        });
        // eslint-disable-next-line
    }, []);

    return {
        endSlots: endSlots,
        endSlotsLoading: endSlotsLoading
    };
}
export default useEndSlots;