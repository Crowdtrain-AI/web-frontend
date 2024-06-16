import {useEffect, useState} from 'react';

const useScrollBottom = (ref: any) => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;

            if(!element) return;

            const bottom = element.getBoundingClientRect().bottom <= window.innerHeight;

            setIsBottom(bottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return isBottom;
};

export default useScrollBottom;