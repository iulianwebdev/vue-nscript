const Sqlite = require("nativescript-sqlite");

const DB_TIME_FORMAT = 'YYYY-MM-DD HH:MM:SS';
const DB_NAME = 'tasks.sqlite';
const DB_INIT = [
    'lists/init',
    'tasks/init'
];

const state = {
    db: null
}

const getters = {}
const mutations = {
    SET_DB(state, { db }) {
        console.log('db set');
        state.db = db;
    }
}
const actions = {
    init(context) {
        (new Sqlite(DB_NAME))
        .then(db => {
            // console.log(context._modules);
            //TODO: find a way to do it dynamically

            DB_INIT.forEach(function(action) {
                context.dispatch(action);
            });

            if (context.state.db == null) {
                context.dispatch('createTables', { db });
            }

        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    },
    createTables(context, { db }) {

        let query = require('./createTables');
        // console.log(query, db, query.categories);
        db.execSQL(query.categories).then(data => {
            db.execSQL(query.lists).then(data => {
                db.execSQL(query.tasks).then(data => {
                    context.commit('SET_DB', { db });
                }, error => {
                    console.log('Could not create tasks Table structure')
                });
            }, error => {
                console.log('Could not create lists Table structure')
            });
        }, error => {
            // console.log('error')
            console.log('Could not create category Table structure')
        });


    },
    // sql({state}, query) {
    //     state.db.execSQL(query).then(results => results);
    // },
    insert(context, { data, table }) {

        let columns = this.genColumns(data);
        let values = this.genValues(data);
        let placeholders = this.genPlaceholders(data);

        context.state.db.execSQL(`INSERT INTO ${table} ${sql} VALUES (${placeholders})`, values).then(id => {
            context.commit(`{$table}/save`, { data: data });
        }, error => {
            console.log("INSERT ERROR", error);
        });
    },
    query(context, { data, conditions, table }) {
        let columns = this.genColumns(data);
        if (!columns) columns = '*';
        let values = this.genValues(data);
        let condition = genWhere(conditions);

        context.state.db.all(`SELECT ${columns} FROM ${table} ${condition}`, values).then(result => {
            context.commit("load", { data: result });
        }, error => {
            console.log("SELECT ERROR", error);
        });
    },
    genColumns(data) {
        return Object.keys(data).join(',');
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
        return data.map(_ => '?').join(',');
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}