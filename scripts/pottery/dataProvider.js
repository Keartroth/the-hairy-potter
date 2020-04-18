  let arrayOfData = []

export const useData = () => arrayOfData.slice()

/*
* Function to perform the fetch call for the corporateinterests resource
*  and then fills the previously empty array with our parsed data.
*/
export const getData = (dataIdentifier) => fetch(`http://localhost:8088/${dataIdentifier}`)
    .then(response => response.json())
    .then(data => arrayOfData = data)