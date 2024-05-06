import { fetchData } from '../store/regimeSlice';

const useHandleClick = (dispatch, navigate) => {
    const handleClick = (regimeData) => {
        dispatch(fetchData(regimeData));

        const slug = regimeData.title
        .replace(/ /g, '-')    // Replace spaces with hyphens
        .replace(/\//g, '-')   // Replace slashes with hyphens
        .replace(/\(/g, '')   // Replace open brackets with hyphens
        .replace(/\)/g, '')    // Replace close brackets with nothing
        .toLowerCase();

        navigate(`/split/${slug}`);
    }

    return handleClick;
}

export default useHandleClick;