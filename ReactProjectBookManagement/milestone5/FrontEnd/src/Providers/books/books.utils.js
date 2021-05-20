export const removeFromArray = ( idToRemove, prevArr ) => {
    return prevArr.filter(({ id }) =>{
        return !prevArr.includes(id);
    })
}