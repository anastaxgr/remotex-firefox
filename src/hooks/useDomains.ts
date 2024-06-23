import { useState, useEffect } from 'react';

import { IDomain } from '../interfaces';

const useDomains = () => {
    const [domains, setDomains] = useState<IDomain[]>([])

    interface savedDomains {
        domain:string;
        secret: string;
    }

    useEffect(() => {
        const storedDomains = JSON.parse(localStorage.getItem('domains'));
        setDomains(storedDomains);
    }, []);


    // insert new domain to list
    const addDomain = (domain: IDomain) => {
        const updatedDomains = [...domains, domain ];
        setDomains(updatedDomains);
        localStorage.setItem('domains', JSON.stringify(updatedDomains));
    };


    // delete a saved domain
    const removeDomain = (domain:IDomain) => {
        const updatedDomains = domains.filter(d => d !== domain);
        setDomains(updatedDomains);
        localStorage.setItem('domains', JSON.stringify(updatedDomains));
    };

    return {
        domains,
        addDomain,
        removeDomain
    };
};

export default useDomains;