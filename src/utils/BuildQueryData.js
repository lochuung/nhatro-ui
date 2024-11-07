export const buildSearchData = ({page, size, status, filters, search, sort, searchProperties = ['name', 'code', 'description']}) => {
    const data = {
        page,
        size,
        filters: [],
        ...(sort && {sorts: [{key: sort.column, direction: sort.direction}]})
    };

    if (filters) {
        data.filters.push(...filters);
    }

    if (status) {
        data.filters.push({key: 'status', operator: 'EQUAL', fieldType: 'STRING', value: status});
    }

    if (search) {
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