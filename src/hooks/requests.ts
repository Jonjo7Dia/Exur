async function httpGetData(page:number, searchText:string, complianceTypIds: number[]){
    const data={
        page: page,
        pageSize: 36,
        searchText: searchText, 
        productCategoryTypeIds: [],
        complianceTypIds: complianceTypIds,
        sourceTypeIds: []
    }; 
    const url = `https://pfp-public-productdb-api.azurewebsites.net/api/product/search/`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    const fetchedData = await response.json();
    return fetchedData;
}

export {httpGetData};

