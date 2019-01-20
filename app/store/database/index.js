const Sqlite = require('nativescript-sqlite');
import dbHelpers from '@/store/helpers/db';
const DB_TIME_FORMAT = 'YYYY-MM-DD HH:MM:SS';
const DB_NAME = 'tasks.sqlite';
const DB_INIT = [
    'lists/init',
    'tasks/init'
];

const state = {
    db: null
};

const getters = {};
const mutations = {
    SET_DB(state, { db }) {
        console.log('db set');
        state.db = db;
    }
};
const actions = {
    init(context) {
    
        (new Sqlite(DB_NAME))
            .then(db => {
            //TODO: find a way to do it dynamically

                DB_INIT.forEach(function(action) {
                    context.dispatch(action);
                });

                if (context.state.db == null) {
                    context.dispatch('createTables', { db });
                }

            }, error => {
                console.log('OPEN DB ERROR', error);
            });
    },
    createTables(context, { db }) {

        let query = require('./createTables');
        console.log('init!!');
        db.execSQL(query.categories).then(data => {
            db.execSQL(query.lists).then(data => {
                db.execSQL(query.tasks).then(data => {
                    context.commit('SET_DB', { db });
                }, error => {
                    console.log('Could not create tasks Table structure');
                });
            }, error => {
                console.log('Could not create lists Table structure');
            });
        }, error => {
            // console.log('error')
            console.log('Could not create category Table structure');
        });


    },
    // sql({state}, query) {
    //     state.db.execSQL(query).then(results => results);
    // },
    insert(context, { data, table }) {
        console.log(Sqlite.exists(DB_NAME));
        // console.log(data.name);
        // return;
        data.created_at = dbHelpers.genTimeStamp();
        let columns = dbHelpers.genColumns(data);
        let values = dbHelpers.genValues(data);
        let placeholders = dbHelpers.genPlaceholders(data);

        /** returns id or error */
        let sql = `INSERT INTO ${table} ${columns} VALUES (${placeholders})`;
        return context.state.db.execSQL(sql, values);

    },
    query(context, { data, conditions, table }) {
        let columns = dbHelpers.genColumns(data);
        if (!columns) columns = '*';
        let values = dbHelpers.genValues(data);
        let condition = dbHelpers.genWhere(conditions);

        context.state.db.all(`SELECT ${columns} FROM ${table} ${condition}`, values).then(result => {
            context.commit('load', { data: result });
        }, error => {
            console.log('SELECT ERROR', error);
        });
    },
    delete(context, {id, table}){
        let sql = `DELETE FROM ${table} WHERE id=?`;
        return context.state.db.execSQL(sql, [id]);
    }

};

export default {
    state,
    getters,
    mutations,
    actions
};