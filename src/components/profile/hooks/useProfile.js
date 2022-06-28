import {useEffect, useState} from 'react';
import profileService from "../services/profileService";

const useProfile= () => {
    const [profileLoading, setProfileLoading] = useState(true);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        profileService.fetch().then(profile => {
            setProfileLoading(false);
            setProfile(profile);
        });
//       setProfile({
//                                      id: 5,
//                                      name : "Steve Jobs",
//                                      username:"user"
//                });
        // eslint-disable-next-line


    }, []);

    return {
        profile:profile,
        profileLoading: profileLoading
    };
}

export default useProfile;