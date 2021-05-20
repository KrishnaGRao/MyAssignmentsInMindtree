export const removeFromArray = ( idToRemove, prevArr ) => {
    return prevArr.filter(({ id }) =>{
        return !idToRemove.includes(id);
    })
}