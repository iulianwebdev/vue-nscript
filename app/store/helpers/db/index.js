export default {

    genColumns(data) {
        return '('+ Object.keys(data).join(',') + ')';
    },
    genValues(data) {
        return Object.values(data);
    },
    genWhere(data) {
        // {name, value, ?operator, ?or}
        let count = 0;

        return data.reduce((acc, val) => {
            let operator = val.hasOwnProperty('operator') ? val.operator : '=';
            let sql = '';
            if (count) {
                let glue = val.hasOwnProperty('or') ? ' OR ' : ' AND ';
                sql += glue;
            }
            sql += `${val.name}${operator}${val.value}`;
            count++;
            return acc + sql;
        }, 'WHERE ');
    },
    genPlaceholders(data) {
        return Object.keys(data).map(_ => '?').join(',');
    },
    /**
     * Generate unix timestamp in seconds
     * @return int [seconds]
     */
    genTimeStamp() {

        return Math.round((new Date()).getTime() / 1000);
    }
}    