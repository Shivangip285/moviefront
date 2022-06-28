import {useEffect, useState} from 'react';
import slotsService from "../services/showsService";

const useSlots = () => {
    const [slotsLoading, setSlotsLoading] = useState(true);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        slotsService.fetchAllSlots().then(slots => {
            setSlotsLoading(false);
            setSlots(slots);
        });
        // eslint-disable-next-line
    }, []);

    return {
        slots: slots,
        slotsLoading: slotsLoading
    };
}
