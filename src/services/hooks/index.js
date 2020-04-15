import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import * as storage from 'storage';

const useRequest = ({ request, url, autoLoad = true, data, config }) => {
    let [reload, setReload] = useState(false);
    let [loading, setLoading] = useState(false);
    let [_data, setData] = useState(null);
    let [error, setError] = useState(null);

    useEffect(() => {
        if(reload || autoLoad){
            load();
        }
    }, [reload, autoLoad]);

    const load = useCallback(async() => {
        setLoading(true);
        let result = null;
        try {
            let query = await request(url, data, config);
            result = query.data;
            setData(result);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
        return result;
    }, [request, url, data, config]);

    const refresh = useCallback(async() => {
        setReload(prev => !prev);
    }, []);
    
    return [load, { loading, data : _data, error, refresh }];
}

export const usePost = ({ url, autoLoad = true, data, config }) => {
    return useRequest({ request : axios.post, autoLoad, url, data, config });
};

export const useGet = ({ url, autoLoad = true, data, config }) => {
    return useRequest({ request : axios.get, autoLoad, url, data, config });
};

export function usePersistedState(key, initialState, isJSON = false) {
    const [state, setState] = useState(() => {
        const storageValue = storage.get(key);
        if (storageValue) {
            return isJSON ? JSON.parse(storageValue) : storageValue;
        }
        return initialState;
    });

    useEffect(() => {
        storage.set(key, isJSON ? JSON.stringify(state) : state);
    }, [key, state]);

    return [state, setState];
}