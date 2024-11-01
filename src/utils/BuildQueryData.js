export const buildSearchData = ({page, size, status, search, sort}) => {
    const data = {
        page,
        size,
        filters: [],
        ...(sort && {sorts: [{key: sort.column, direction: sort.direction}]})
    };

    if (status) {
        data.filters.push({key: 'status', operator: 'EQUAL', fieldType: 'STRING', value: status});
    }

    if (search) {
        const searchProperties = ['name', 'code', 'description'];
        data.filters.push(
            ...searchProperties.map(property => ({
                key: property,
                operator: 'LIKE_OR',
                fieldType: 'STRING',
                value: search,
            }))
        );
        data.searchType = 'search_or';
    }

    return data;
};

export default buildSearchData;