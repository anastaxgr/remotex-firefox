import { useState, useEffect } from 'react';

const useDomains = () => {
    const [domains, setDomains] = useState([]);

    useEffect(() => {
        const storedDomains = JSON.parse(localStorage.getItem('domains')) || [];
        setDomains(storedDomains);
    }, []);

    const addDomain = (domain) => {
        const updatedDomains = [...domains, domain];
        setDomains(updatedDomains);
        localStorage.setItem('domains', JSON.stringify(updatedDomains));
    };

    const removeDomain = (domain) => {
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