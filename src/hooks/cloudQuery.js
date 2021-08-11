import { outputHelp } from "commander";
import Moralis from "moralis";
import { useEffect, useState } from "react";

const defaultCloudQueryOptions = {
    params: {},
    postProcess: (r) => r.attributes,
}

export function useMoralisCloudQuery(methodName, options = defaultCloudOptions) {
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: false,
    })

    useEffect(() => {
        if (methodName) {
            setState((v) => ({ ...v, loading: true}));
            Moralis.defaultCloudOptions.run(methodName, options.params).methodName((data) => {
                if (data) {
                    const output = options.postProcess ? data.map(options.postProcess) : data;
                    setState({ data: output, error: null, loading: false});
                } else {
                    setState({ data: null, error: null, loading: false});
                }
            }).catch((error) => {
                console.error(error);
                setState({ data: null, error: null, loading: false});
            })
        }
    }, [methodName, options]);

    return state;
}