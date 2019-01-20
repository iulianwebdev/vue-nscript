let categories = `CREATE TABLE IF NOT EXISTS categories(
                            id          INTEGER PRIMARY KEY AUTOINCREMENT,
                            name        TEXT NOT NULL,
                            description TEXT,
                            _order      INTEGER NOT NULL,
                            created_at  INTEGER NOT NULL
                        );`;
let lists = `CREATE TABLE IF NOT EXISTS lists(
                            id           INTEGER PRIMARY KEY AUTOINCREMENT,
                            _order       INTEGER NOT NULL,
                            name         TEXT NOT NULL,
                            completed_at INTEGER,
                            created_at   INTEGER NOT NULL,
                            category_id  INTEGER NOT NULL,
                            FOREIGN KEY(category_id) REFERENCES categories(id)
                        );`;
let tasks = `CREATE TABLE IF NOT EXISTS tasks(
                            id            INTEGER PRIMARY KEY AUTOINCREMENT, 
                            name          TEXT NOT NULL,
                            description   TEXT,
                            _order        INTEGER NOT NULL,
                            created_at    INTEGER,
                            completed_at  INTEGER,
                            list_id       INTEGER NOT NULL,
                            FOREIGN KEY(list_id) REFERENCES lists(id)
                        );`;
export {
    categories,
    lists,
    tasks
};